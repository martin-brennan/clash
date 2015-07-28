const ipc           = require('ipc');
const fs            = require('fs');
const dialog        = require('dialog');
const musicmetadata = require('musicmetadata');
const _             = require('lodash');

class File {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
    ipc.on('Main::File::OpenDirectory', this.openDirectory.bind(this));
    ipc.on('Main::File::ListFilesInDir', this.listFilesAndMeta.bind(this));
  }

  openDirectory(event) {
    dialog.showOpenDialog(this.mainWindow, {
      title: 'Select Directory',
      properties: ['openDirectory']
    }, (directory) => {
      event.sender.send('Render::File::OpenDirectory', directory);
    });
  }

  listFilesAndMeta(ipcEvent, dir) {
    fs.readdir(dir, (err, files) => {
      let filtered = this.filterByExtension(files, this.mainWindow.SUPPORTED_EXTENSIONS)
      let filesWithMeta = [];

      // loop through all of the filtered by extension files
      // and do a closure function to get the result of an asyncronous
      // musicmetadata call to get the ID3 tags
      for (let i = 0; i < filtered.length; i++) {
        (this.readMetaData)(i, filesWithMeta, filtered, dir, ipcEvent);
      }
    });
  }

  filterByExtension(files, extensions) {
    let filtered = _.filter(files, (file) => {
      let isValid = false;
      for (var i = 0; i < extensions.length; i++) {
        if (file.indexOf(extensions[i]) !== -1) {
          isValid = true;
        }
      }
      return isValid;
    });
    return filtered;
  }

  readMetaData(index, filesWithMeta, filtered, dir, ipcEvent) {

    // get the path of the current file combined with the directory
    let path = dir + '/' + filtered[index];

    // read the metadata from a file stream
    musicmetadata(fs.createReadStream(path), (err, metadata) => {
      if (err) throw err;

      // null the image file data so it is not all sent back to the
      // render process, which takes ages.
      metadata.picture = null;

      // add the file to the list of metadata files
      filesWithMeta.push(metadata);

      // if we are on the last file in the list then
      // send the list of files back to the render process
      if (index === (filtered.length - 1)) {
        ipcEvent.sender.send('Render::File::ListFilesInDir', filtered, filesWithMeta);
        return;
      }
    });
  }
}

export default File;

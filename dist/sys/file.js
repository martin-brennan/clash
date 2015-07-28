'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ipc = require('ipc');
var fs = require('fs');
var dialog = require('dialog');
var musicmetadata = require('musicmetadata');
var _ = require('lodash');

var File = (function () {
  function File(mainWindow) {
    _classCallCheck(this, File);

    this.mainWindow = mainWindow;
    ipc.on('Main::File::OpenDirectory', this.openDirectory.bind(this));
    ipc.on('Main::File::ListFilesInDir', this.listFilesAndMeta.bind(this));
  }

  _createClass(File, [{
    key: 'openDirectory',
    value: function openDirectory(event) {
      dialog.showOpenDialog(this.mainWindow, {
        title: 'Select Directory',
        properties: ['openDirectory']
      }, function (directory) {
        event.sender.send('Render::File::OpenDirectory', directory);
      });
    }
  }, {
    key: 'listFilesAndMeta',
    value: function listFilesAndMeta(ipcEvent, dir) {
      var _this = this;

      fs.readdir(dir, function (err, files) {
        var filtered = _this.filterByExtension(files, _this.mainWindow.SUPPORTED_EXTENSIONS);
        var filesWithMeta = [];

        // loop through all of the filtered by extension files
        // and do a closure function to get the result of an asyncronous
        // musicmetadata call to get the ID3 tags
        for (var i = 0; i < filtered.length; i++) {
          _this.readMetaData(i, filesWithMeta, filtered, dir, ipcEvent);
        }
      });
    }
  }, {
    key: 'filterByExtension',
    value: function filterByExtension(files, extensions) {
      var filtered = _.filter(files, function (file) {
        var isValid = false;
        for (var i = 0; i < extensions.length; i++) {
          if (file.indexOf(extensions[i]) !== -1) {
            isValid = true;
          }
        }
        return isValid;
      });
      return filtered;
    }
  }, {
    key: 'readMetaData',
    value: function readMetaData(index, filesWithMeta, filtered, dir, ipcEvent) {

      // get the path of the current file combined with the directory
      var path = dir + '/' + filtered[index];

      // read the metadata from a file stream
      musicmetadata(fs.createReadStream(path), function (err, metadata) {
        if (err) throw err;

        // null the image file data so it is not all sent back to the
        // render process, which takes ages.
        metadata.picture = null;

        // add the file to the list of metadata files
        filesWithMeta.push(metadata);

        // if we are on the last file in the list then
        // send the list of files back to the render process
        if (index === filtered.length - 1) {
          ipcEvent.sender.send('Render::File::ListFilesInDir', filtered, filesWithMeta);
          return;
        }
      });
    }
  }]);

  return File;
})();

exports['default'] = File;
module.exports = exports['default'];
const electron      = require('app');
const BrowserWindow = require('browser-window');
const ipc           = require('ipc');
const fs            = require('fs');
const dialog        = require('dialog');
const _             = require('lodash');

let mainWindow = null;
electron.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    center: true,
    title: 'Clash'
  });

  var base = process.platform === 'darwin' ? 'file:///Users/martin/repos/clash/' : 'C:/repos/clash/';
  mainWindow.loadUrl(base + 'index.html');
  mainWindow.openDevTools();
});

ipc.on('Main::File::ListFilesInDir', (event, dir) => {
  readMusicDir(dir, (err, files) => {
    let filtered = _.filter(files, (file) => {
      return file.indexOf('.mp3') !== -1;
    })
    event.sender.send('Render::File::ListFilesInDir', filtered);
  });
});

function readMusicDir(dir, callback) {
  fs.readdir(dir, callback);
}


ipc.on('Main::Window::Close', (event) => {
  mainWindow.close();
});


ipc.on('Main::File::OpenDirectory', (event) => {
  dialog.showOpenDialog(mainWindow, {
    title: 'Select Directory',
    properties: ['openDirectory']
  }, (files) => {
    event.sender.send('Render::File::OpenDirectory', files);
  });
});

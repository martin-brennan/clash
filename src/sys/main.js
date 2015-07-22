const electron      = require('app');
const BrowserWindow = require('browser-window');
const ipc           = require('ipc');
const fs            = require('fs');

let mainWindow = null;
electron.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720
  });

  console.log(__dirname);
  mainWindow.loadUrl('file:///Users/martin/repos/clash/index.html');

  mainWindow.openDevTools();
});

ipc.on('main:file:list-dir', (event, dir) => {
  readMusicDir(dir, (err, files) => {
    console.log(err);
    console.log(files);
    event.sender.send('rend:file:list-dir', files, dir);
  });
});

function readMusicDir(dir, callback) {
  fs.readdir(dir, callback);
}

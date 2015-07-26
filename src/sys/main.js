const electron      = require('app');
const BrowserWindow = require('browser-window');
const ipc           = require('ipc');
const fs            = require('fs');

let mainWindow = null;
electron.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    center: true,
    title: 'Clash'
  });

  var base = process.platform === 'darwin' ? '/Users/martin/repos/clash/' : 'C:/repos/clash/';
  mainWindow.loadUrl(base + '/index.html');

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


ipc.on('Main::Window::Close', (event) => {
  mainWindow.close();
});

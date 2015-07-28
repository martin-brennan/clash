const electron      = require('app');
const BrowserWindow = require('browser-window');
const ipc           = require('ipc');
const _             = require('lodash');
const File          = require('./file');

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

  mainWindow.SUPPORTED_EXTENSIONS = ['.mp3', '.aac', '.flac', '.ogg', '.wma'];

  var file = new File(mainWindow);
});

ipc.on('Main::Window::Close', (event) => {
  mainWindow.close();
});

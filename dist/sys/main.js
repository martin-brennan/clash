'use strict';

var electron = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var _ = require('lodash');
var File = require('./file');

var mainWindow = null;
electron.on('ready', function () {
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

ipc.on('Main::Window::Close', function (event) {
  mainWindow.close();
});
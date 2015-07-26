'use strict';

var electron = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var fs = require('fs');
var dialog = require('dialog');
var _ = require('lodash');

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
});

ipc.on('Main::File::ListFilesInDir', function (event, dir) {
  readMusicDir(dir, function (err, files) {
    var filtered = _.filter(files, function (file) {
      return file.indexOf('.mp3') !== -1;
    });
    event.sender.send('Render::File::ListFilesInDir', filtered);
  });
});

function readMusicDir(dir, callback) {
  fs.readdir(dir, callback);
}

ipc.on('Main::Window::Close', function (event) {
  mainWindow.close();
});

ipc.on('Main::File::OpenDirectory', function (event) {
  dialog.showOpenDialog(mainWindow, {
    title: 'Select Directory',
    properties: ['openDirectory']
  }, function (files) {
    event.sender.send('Render::File::OpenDirectory', files);
  });
});
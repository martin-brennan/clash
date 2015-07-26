'use strict';

var electron = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var fs = require('fs');
var dialog = require('dialog');

var mainWindow = null;
electron.on('ready', function () {
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

ipc.on('main:file:list-dir', function (event, dir) {
  readMusicDir(dir, function (err, files) {
    console.log(err);
    console.log(files);
    event.sender.send('rend:file:list-dir', files, dir);
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
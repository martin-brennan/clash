'use strict';

var electron = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');
var fs = require('fs');

var mainWindow = null;
electron.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720
  });

  mainWindow.loadUrl('file:///Users/martin/repos/clash/index.html');

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
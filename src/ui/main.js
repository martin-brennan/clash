const ipc = electron_require('ipc');
import React from 'react';
import _ from 'lodash';

ipc.on('rend:file:list-dir', function (files, dir) {
  console.log(files);
  var albumArt = document.getElementById('art');

  for (var i = 0; i < files.length; i++) {
    if (files[i].indexOf('.jpg') !== -1) {
      albumArt.src = 'file://' + dir + '/' + files[i];
    }
  }
});

var opendir = document.getElementById('opendir');
opendir.addEventListener('click', function () {
  var dirName = document.getElementById('dir').value;
  listDir(dirName);
});

function listDir(dirName) {
  var dir = '/Users/martin/Music/' + dirName;
  ipc.send('main:file:list-dir', dir);
}

class Lol extends React.Component {
  render() {
    let style = {
      color: 'red'
    }
    return <p style={style}>LOLOLOLOLOLOLOL <a href="http://www.google.com">GOOGLE DOOD</a></p>;
  }
}

class ExampleComponent extends React.Component {
  render() {
    return <div><h1>Hello, world!</h1><Lol /></div>;
  }
}


React.render(<ExampleComponent />, document.getElementById('app'));

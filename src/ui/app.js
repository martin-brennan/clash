import React from 'react';
import ReactDom from 'react-dom';
import Clash from './clash.c';

class ClashApplication {
  constructor() {
    ReactDom.render(<Clash />, document.getElementById('clash-app'));
  }
}

window.Clash = new ClashApplication();

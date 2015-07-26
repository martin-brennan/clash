import React from 'react';
const ipc = electron_require('ipc');

class TitleBar extends React.Component {
  constructor() {
    super();
    this.style = {
      'WebkitAppRegion': 'drag',
      'WebkitUserSelect': 'none',
      'height': '20px',
      'backgroundColor': '#ccc'
    }
    this.buttonStyle = {
      'WebkitAppRegion': 'no-drag'
    }
  }

  closeWindow() {
    ipc.send('Main::Window::Close');
  }

  render() {
    return <div style={this.style}>Clash <button style={this.buttonStyle} onClick={this.closeWindow}>Quit</button></div>;
  }
}

export default TitleBar;

import React from 'react';
const ipc = electron_require('ipc');

class DirectorySelector extends React.Component {

  constructor() {
    super();

    ipc.on('Render::File::OpenDirectory', (dir) => {
      this.props.onDirectorySelected(dir[0]);
    });
  }

  selectDirectory() {
    ipc.send('Main::File::OpenDirectory');
  }

  render() {
    return <button id="directory-selector" onClick={this.selectDirectory}>[-]</button>
  }
}

export default DirectorySelector;

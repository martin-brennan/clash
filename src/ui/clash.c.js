import React from 'react';
import AddressBar from './addressBar/addressBar.c';
import TitleBar from './titleBar/titleBar.c';
import FileList from './fileList/fileList.c';

class Clash extends React.Component {
  constructor() {
    super();
    this.state = { dir: '' };
  }

  dirSelected(dir) {
    this.setState({ dir });
    this.refs.filelist.onDirChanged(dir);
  }

  render() {
    return <div>
      <TitleBar />
      <AddressBar onDirSelected={this.dirSelected.bind(this)} />
      <p>You are running <em>Clash</em>.</p>
      <p>{this.state.dir}</p>
      <FileList dir={this.state.dir} ref="filelist" />
    </div>
  }
}

export default Clash;

import React from 'react';
import DirectoryBar from './directoryBar.c';
import DirectorySelector from './directorySelector.c';

class AddressBar extends React.Component {

  constructor() {
    super();

    this.state = {dir: 'C:/users/martin/music'};
  }

  dirSelected(dir) {
    this.setState({ dir });
    this.props.onDirSelected(dir);
  }

  render() {
    return <div id="address-bar">
      <DirectoryBar dir={this.state.dir} />
      <DirectorySelector dir={this.state.dir} onDirectorySelected={this.dirSelected.bind(this)} />
    </div>
  }
}

export default AddressBar;

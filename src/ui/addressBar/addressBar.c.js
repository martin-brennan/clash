import React from 'react';
import DirectoryBar from './directoryBar.c';
import DirectorySelector from './directorySelector.c';

class AddressBar extends React.Component {
  render() {
    return <div id="address-bar">
      <DirectoryBar dir="/users/martin/music" /><DirectorySelector />
    </div>
  }
}

export default AddressBar;

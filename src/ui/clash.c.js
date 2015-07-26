import React from 'react';
import AddressBar from './addressBar/addressBar.c';
import TitleBar from './titleBar/titleBar.c';

class Clash extends React.Component {
  render() {
    return <div>
      <TitleBar />
      <AddressBar />
      <p>You are running <em>Clash</em>.</p>
    </div>
  }
}

export default Clash;

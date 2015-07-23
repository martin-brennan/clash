import React from 'react';
import AddressBar from './addressBar/addressBar.c';

class Clash extends React.Component {
  render() {
    return <div>
      <AddressBar />
      <p>You are running <em>clash</em>.</p>
    </div>
  }
}

export default Clash;

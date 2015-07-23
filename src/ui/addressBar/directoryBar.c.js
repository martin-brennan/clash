import React from 'react';

class DirectoryBar extends React.Component {
  render() {
    return <input type="text" readOnly style={{width: '100%'}} value={this.props.dir} />
  }
}

export default DirectoryBar;

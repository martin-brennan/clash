import React from 'react';

class DirectoryBar extends React.Component {
  render() {
    return <div>
      <input type="text" readOnly style={{width: '100%'}} value={this.props.dir} />
    </div>
  }
}

export default DirectoryBar;

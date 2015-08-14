import React from 'react';

/**
 * props has an entire track metadata
 * info
 * album
 * albumartist []
 * artist []
 * disk { no: 0, of: 1 }
 * duration
 * genre []
 * title
 * track { no: 1, of: 10 }
 * year
 * filename
 */
class TrackRow extends React.Component {
  render() {
    return <tr>
      <td>
        { this.props.track.track.no }
      </td>
      <td>
        { this.props.track.title }
      </td>
    </tr>;
  }
}

export default TrackRow;

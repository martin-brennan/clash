import React    from 'react';
import TrackRow from './trackRow.c';
import _        from 'lodash';

class TrackTable extends React.Component {
  constructor() {
    super();
    this.tableStyle = {
      width: '100%'
    };
  }
  render() {
    this.props.tracks.sort((a, b) => {
      return a.track.no - b.track.no;
    });
    let trackList = _.map(this.props.tracks, (track) => {
      return <TrackRow track={track} key={track.track.no} />;
    });
    return <table style={this.tableStyle}>
      <tbody>
      { trackList }
      </tbody>
    </table>;
  }
}

export default TrackTable;

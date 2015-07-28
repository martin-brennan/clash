import React from 'react';
import _     from 'lodash';
const ipc = electron_require('ipc');

class FileList extends React.Component {
  constructor() {
    super();
    this.state = { files: [], metafiltered: [] };
    this.initFileListReceiver();
  }

  onDirChanged(dir) {
    this.setState({ dir });
    this.listFiles();
  }

  listFiles() {
    ipc.send('Main::File::ListFilesInDir', this.state.dir);
  }

  initFileListReceiver() {
    ipc.on('Render::File::ListFilesInDir', (files, metafiltered) => {
      this.setState({ files, metafiltered });
    });
  }

  render() {
    let key = 0;
    let fileListItems = _.map(this.state.files, (file) => {
      key++;
      return <li key={key}>{file}</li>;
    });
    return <ul>
      {fileListItems}
    </ul>
  }
}

export default FileList;

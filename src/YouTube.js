import React from 'react';
import YouTube from 'react-youtube';

class YoutubeComponent extends React.Component {
  render() {
    const opts = {
      height: '200rem',
      width: '300rem',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="cNZvtVwRzts"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeComponent;
import React from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

class YoutubeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      youtubelink: ''

    }
  }


  SubmitHandler(e) {
    
  }



  render() {
    const opts = {
      height: '200rem',
      width: '300rem',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


    return (
      <React.Fragment>

        <h3 className='text-white mx-auto' >My Media</h3>

        <form className="form-inline mx-auto" onSubmit={this.SubmitHandler}>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="youtubelink" className="sr-only">YouTube</label>
            <input type="text" className="form-control" id="inputPassword2" name='YouTubelink' placeholder="place link" />
          </div>
          <button type="submit" className="btn btn-primary btn-sm mb-3">
            <FontAwesomeIcon icon={faUpload} size='1x' />
          </button>
        </form>

        {this.props.user.role==='musician' ?
          <YouTube
            videoId="cNZvtVwRzts"
            opts={opts}
            onReady={this._onReady}
          /> :
          <YouTube
            videoId="M4BWb_GQy0E"
            opts={opts}
            onReady={this._onReady}
          />

        }
      </React.Fragment>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeComponent;
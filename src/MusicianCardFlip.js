import React from 'react';
import ReactCardFlip from 'react-card-flip';
import MusicianProfile from './MusicianProfile';
import MusicianTeaser from './MusicianTeaser';




class MusicianCardFlip extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick() {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   

    render() {
      return (
        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" style={{marginTop: "500px"}}
         flipSpeedBackToFront={2} flipSpeedFrontToBack={2}>

          <MusicianTeaser parentflip={this.handleClick} apitoken={this.props.apitoken} user={this.props.user} musicianinfo={this.props.musicianinfo}>
            This is the front of the card.
          </MusicianTeaser>
   
          <MusicianProfile parentflip={this.handleClick} apitoken={this.props.apitoken} user={this.props.user} musicianinfo={this.props.musicianinfo}>
            This is the back of the card.
          </MusicianProfile>

        </ReactCardFlip>
      )
    }
  }

  export default MusicianCardFlip;
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import VenueProfile from './VenueProfile';
import VenueTeaser from './VenueTeaser';




class VenueCardFlip extends React.Component {
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
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="slower" style={{marginTop: "500px"}}>
          <VenueTeaser parentflip={this.handleClick} apitoken={this.props.apitoken} user={this.props.user} venueinfo={this.props.venueinfo}>
            This is the front of the card.
            {/* <button onClick={this.handleClick}>Click to flip</button> */}
          </VenueTeaser>
   
          <VenueProfile parentflip={this.handleClick} apitoken={this.props.apitoken} user={this.props.user} venueinfo={this.props.venueinfo}>
            This is the back of the card.
            {/* <button onClick={this.handleClick}>Click to flip</button> */}
          </VenueProfile>
        </ReactCardFlip>
      )
    }
  }

  export default VenueCardFlip;
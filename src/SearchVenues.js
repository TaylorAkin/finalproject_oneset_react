import React from 'react';
import axios from 'axios';
import VenueCardFlip from './VenueCardFlip';

class SearchVenues extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            venues: []
        }
    }

    componentDidMount(){
        this.getVenues()
    }


    getVenues(){
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/venues',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            // console.log(res.data.data);
            this.setState({venues: res.data.data})
              console.log(this.state.venues);                

        })
    }

    render(){
        return(
        
        <React.Fragment>
             {/*Card Deck*/}
            {/* <div className="card-deck"> */}
                {this.state.venues ? this.state.venues.map(
                    (item,index) => {
                        console.log(item.user.name);
                        return(


                            <VenueCardFlip key={index} apitoken={this.props.apitoken} user={this.props.user} venueinfo={this.state.venues[index]} />

                        )
                    }
        
                ) : ''}

            {/* </div> */}
        </React.Fragment>

        )
    }

}


export default SearchVenues;
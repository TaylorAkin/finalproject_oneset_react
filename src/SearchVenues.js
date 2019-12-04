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
            url: 'https://oneset.appspot.com/api/venues',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            
            this.setState({venues: res.data.data})               

        })
    }

    render(){
        return(
        
        <React.Fragment>
             {/*Card Deck*/}
            <div className="container mt-5 pb-5" style={{marginTop: "5rem", marginBottom: "3rem" , backgroundColor: "black"}}>
                {this.state.venues ? this.state.venues.map(
                    (item,index) => {

                        return(

                                <VenueCardFlip key={index} apitoken={this.props.apitoken} user={this.props.user} venueinfo={this.state.venues[index]}/>

                        )
                    }
        
                ) : ''}

            </div>
        </React.Fragment>

        )
    }

}


export default SearchVenues;
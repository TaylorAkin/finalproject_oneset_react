import React from 'react';
import axios from 'axios';


class VenueProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
         
            venuebio: [],
        }
        this.getvenueprofile = this.getvenueprofile.bind(this);
    }
    componentDidMount(){
       
        this.getvenueprofile();
       
    }

    changeParent = () => {
        this.props.parentflip();
    }

    getvenueprofile(){
       
        axios({
            method: 'get',
            url: 'https://oneset.appspot.com/api/profile/' + this.props.venueinfo.user.id, 
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
           
            this.setState({ venuebio: res.data.data[0].bio})
           
        });
    }

    

    render(){

        return(

           
            <React.Fragment>
            {/*Card Deck*/}
            <div className="card-deck pt-5">
              {/*Card*/}
                <div className="card">
                
                        {/*Card Image*/}
                    <div className="view overlay">
                    <img className="card-img-top" src="/images/livemusic.jpeg" alt="Card"/>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                    </div>
                
                    {/*Card content */}
                    <div className="card-body">
                
                    {/*Title */}
                    <h4 className="card-title text-center">{this.props.venueinfo.user.name}</h4>
                    {/*Bio */}
                    <p className="card-text text-center">{this.state.venuebio}</p>

                    <h5>Contact Info</h5>

                    <p className="card-text">{this.props.venueinfo.user.email}</p>

                    {/* Provides extra visual weight and identifies the primary action in a set of buttons*/}
                    <button onClick={this.changeParent} type="button" className="btn btn-blue btn-md mx-auto" 
                    style={{display: "block"}}>Turn Back</button>
                
                    </div>
                        
                </div>
            </div>
        </React.Fragment>
            
        )
    }
}

export default VenueProfile;
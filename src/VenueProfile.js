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
       
        console.log(this.props.venueinfo.user);
        // this.setState({venueinfo: this.props.venueinfo.user})
        this.getvenueprofile();
       
    }

    changeParent = () => {
        this.props.parentflip();
    }

    getvenueprofile(){
       
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/profile/' + this.props.venueinfo.user.id, 
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            // console.log(res.data.data[0].bio);
            this.setState({ venuebio: res.data.data[0].bio})
            console.log(this.state.venuebio);
        });
    }

    

    render(){

        return(

            // <div>{this.state.venuebio}</div>
           
            <React.Fragment>
            {/*Card Deck*/}
            <div className="card-deck pt-5">
              {/*Card*/}
                <div className="card">
                
                        {/*Card Image*/}
                    <div className="view overlay">
                    <img className="card-img-top" src="/images/lex.jpeg" alt="Card"/>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                    </div>
                
                    {/*Card content */}
                    <div className="card-body">
                
                    {/*Title */}
                    <h4 className="card-title">{this.props.venueinfo.user.name}</h4>
                    {/*Text */}
                    <p className="card-text">{this.state.venuebio}</p>
                    {/* Provides extra visual weight and identifies the primary action in a set of buttons*/}
                    <button onClick={this.changeParent} type="button" className="btn btn-light-blue btn-md">View Preview</button>
                
                    </div>
                        
                </div>
            </div>
        </React.Fragment>

            
        )
        
    }
}

export default VenueProfile;
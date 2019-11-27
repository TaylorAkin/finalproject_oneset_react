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

            <div>{this.state.venuebio}</div>

            
        )
        
    }
}

export default VenueProfile;
import React from 'react';
import axios from 'axios';


class VenueProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            venueid: ''
        }

    }

    getvenueprofile(){
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/tags/',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
    }
    

    render(){

        return(

            <div>hello</div>

            
        )
        
    }
}

export default VenueProfile;
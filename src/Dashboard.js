import React from 'react';
import LogoutComponent from './Logout';



class DashboardComponent extends React.Component{


    constructor(props){
        super(props);
        this.state = {

        }
    
    }

render(){

    return(

    <React.Fragment>

        <LogoutComponent apitoken = {this.props.apitoken} user = {this.props.user}/>
        

    </React.Fragment>

    )

}

}




export default DashboardComponent;
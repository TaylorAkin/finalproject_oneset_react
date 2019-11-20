import React from 'react';
import LogoutComponent from './Logout';
import HeaderComponent from './Header';
import FooterComponent from './Footer';



class DashboardComponent extends React.Component{


    constructor(props){
        super(props);
        this.state = {

        }
    
    }

render(){

    return(

    <React.Fragment>

        <HeaderComponent apitoken = {this.props.apitoken} user = {this.props.user}/>
       
        <FooterComponent apitoken = {this.props.apitoken} user = {this.props.user}/>

        

    </React.Fragment>

    )

}

}




export default DashboardComponent;
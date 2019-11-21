import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';




class LogoutComponent extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            email: '' ,
            password: '',
        }
        // this.SubmitHandler=this.SubmitHandler.bind(this);
    }

        SubmitHandler(e) {
        // post request for laravel api call
        // console.log('Bearer ' + this.props.apitoken);
        localStorage.removeItem('data');
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/logout',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                // prepare new menu item array
                let emailArr = res.data;
                // console.log(emailArr);
                if(emailArr){
                    this.setState({ data: ''});
                }
                

            });

            e.preventDefault();

        }

    
    render(){

        return(
           <React.Fragment>

            <form onSubmit={this.SubmitHandler}>
            
                <Button type="submit" color="primary">Logout</Button>{' '}

            </form>

           </React.Fragment>


        );


    }
}

export default LogoutComponent;
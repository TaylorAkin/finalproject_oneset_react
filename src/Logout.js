import React from 'react';
import axios from 'axios';


class LogoutComponent extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            email: '' ,
            password: '',
            token: '',
        }
        // this.SubmitHandler=this.SubmitHandler.bind(this);
       
    }

      componentDidMount(){
       
        //  var token = this.props.apitoken;
         this.setState({token: this.props.apitoken})
         console.log(this.state.token);
        
    }
    


        SubmitHandler(e) {
       
        // console.log(this.state.token);
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
            // console.log(this.props.apitoken)
        return(
           <React.Fragment>

            <form onSubmit={this.SubmitHandler}>
            
                <button type="submit" color="dark">Logout</button>

            </form>

           </React.Fragment>


        );


    }
}

export default LogoutComponent;
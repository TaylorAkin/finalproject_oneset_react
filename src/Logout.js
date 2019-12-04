import React from 'react';
import axios from 'axios';


class LogoutComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            token: '',
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);

    }

    SubmitHandler(e) {
        
        localStorage.removeItem('data');
        axios({
            method: 'get',
            url: 'https://oneset.appspot.com/api/logout',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                
                this.props.getTokenfromChildComponent('');

            });

        e.preventDefault();

    }

    render() {
      
        return (
            <React.Fragment>

                <form onSubmit={this.SubmitHandler}>
                    <button type="submit" color="dark">Logout</button>
                </form>

            </React.Fragment>
        );
    }
}

export default LogoutComponent;
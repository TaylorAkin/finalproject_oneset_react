import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';




class RegisterComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            role: 'musician',
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.OnChangeHandler = this.OnChangeHandler.bind(this);
        this.OnRoleChangeHandler = this.OnRoleChangeHandler.bind(this);
    }
    SubmitHandler(e) {
        // post request for laravel api call

        //set the state of role, if you clicked on musicain or venue

        axios.post('http://127.0.0.1:8000/api/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role

        })
            .then(response => {
                const data = response.data;
                this.setState({ data: data });
                // console.log(this.state.data)
                // localStorage.setItem('token', response.data.token)
                localStorage.setItem('data', JSON.stringify(response.data))
                this.props.apitoken(this.state.data);
            });
        e.preventDefault();

    }

    OnChangeHandler(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        // console.log(name, value);
        this.setState({ [name]: value })
        // console.log(this.state)
    }

   async OnRoleChangeHandler(e) {
 //set state of role based on which button is clicked.
//  console.log(e.target.name);
        if(e.target.name === 'musician'){
           await this.setState({role : 'musician'})
            // console.log(this.state.role);
        } else if(e.target.name === 'venue'){
           await this.setState({role : 'venue'})
            // console.log(this.state.role);
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* <button onClick = {this.props.switch} className="btn btn-primary"/> */}
                <FontAwesomeIcon icon={faMusic} size='5x' />
                <h1 className='text-center display-5'>OneSet</h1>




                <form onSubmit={this.SubmitHandler}>

                    <h3 className='text-center'>I am..</h3>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-primary">
                            <button onClick={this.OnRoleChangeHandler} id="musician" name="musician" value="musician"> a Musician.</button>
                        </label>
                        <label className="btn btn-primary">
                            <button onClick={this.OnRoleChangeHandler} id="venue" name="venue" value="venue"> looking for one.</button>
                        </label>
                    </div>

                     {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
                         <label className="btn btn-secondary active">
                             <input type="radio" name="options" id="option1" autoComplete="off" /> Active
                         </label>
                         <label className="btn btn-secondary">
                             <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
                         </label>
                     </div> */}


                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" name="name" onChange={this.OnChangeHandler} />
                        <small id="emailHelp" className="form-text text-muted">Real names please.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.OnChangeHandler} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.OnChangeHandler}></input>
                        <small id="emailHelp" className="form-text text-muted">Make it a good one.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

                <h3 className='text-center'>Have an account?</h3>

                <Button onClick={this.props.switch} className="btn-mdb-color">Login</Button>{' '}




            </React.Fragment>


        );


    }
}

export default RegisterComponent;
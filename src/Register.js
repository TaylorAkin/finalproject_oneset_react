import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'




class RegisterComponent extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            name: '',
            email: '' ,
            password: '',
        }
        this.SubmitHandler=this.SubmitHandler.bind(this);
        this.OnChangeHandler=this.OnChangeHandler.bind(this);
    }
        SubmitHandler(e) {
        // post request for laravel api call
        axios.post('http://127.0.0.1:8000/api/register' ,{
            name: this.state.name,
            email: this.state.email , 
            password:this.state.password})
          .then(response => { const data = response.data; 
            this.setState({ data : data});
            // console.log(this.state.data)
            localStorage.setItem('token', response.data.token)
            this.props.apitoken(this.state.data);
          });
          e.preventDefault();

        }

        OnChangeHandler(e){
            const target = e.target;
            const value = target.value;
            const name = target.name;
            this.setState({[name]:value})
            // console.log(this.state)
        }

    
    render(){

        return(
           <React.Fragment>

            {/* <img style={{height:'10rem'}}  src='/images/note.png' value='Tmail' alt='Tmail'></img> */}
            <FontAwesomeIcon icon={faMusic} size='9x'/>
            <h1 className='text-center display-2'>OneSet</h1>
            <h1 className='text-center'>Register</h1>

            <form onSubmit={this.SubmitHandler}>
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" name="name" onChange={this.OnChangeHandler}/>
                        <small id="emailHelp" className="form-text text-muted">Real names please.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.OnChangeHandler}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.OnChangeHandler}></input>
                    <small id="emailHelp" className="form-text text-muted">Make it a good one.</small>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

     

           </React.Fragment>


        );


    }
}

export default RegisterComponent;
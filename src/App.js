import React from 'react';
import LoginComponent from './Login';
import DashboardComponent from './Dashboard';
import './App.css';
import RegisterComponent from './Register';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login_view: true,


    }
    this.getTokenfromChildComponent = this.getTokenfromChildComponent.bind(this);
    this.switch = this.switch.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  switch(){
  
    this.setState({login_view: !this.state.login_view})
  }

  getTokenfromChildComponent(data) {

    this.setState({ data: data })

  }
  async setLocalStorage(data){

    await this.setState({data:JSON.parse(data)});

  }

  componentDidMount() {

    this.setLocalStorage(localStorage.getItem('data'));

}

  render() {
    // console.log(this.state.data);
    if (!this.state.data) {

      return (

        <div className="App">
          <header className="App-header">
   
           {this.state.login_view ? 
           <RegisterComponent switch = {this.switch} apitoken = {this.getTokenfromChildComponent} user = {this.props.user} /> :
           <LoginComponent switch = {this.switch} token={this.getTokenfromChildComponent} user = {this.props.user}/>}



          </header>

        </div>
      );

    } else{

      console.log(this.state.data.token);
      return(
        
        <DashboardComponent
         apitoken = {this.state.data.token} 
        user = {this.state.data.user} 
        data={this.state.data}
        />

      );
    }

    };
  }

export default App;

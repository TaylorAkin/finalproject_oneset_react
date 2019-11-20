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
      token: '',

    }
    this.getTokenfromChildComponent = this.getTokenfromChildComponent.bind(this);
  }

  getTokenfromChildComponent(data) {

    this.setState({ data: data })

  }

  componentDidMount() {

    var getStorage = localStorage.getItem(this.getTokenfromChildComponent);
    if (getStorage) {

        getStorage = JSON.parse(getStorage);
        this.setState(state => ({
  

        }));

    }

    else {

    }
}

  render() {
    // console.log(this.state.data);
    if (!this.state.data) {

      return (

        <div className="App">
          <header className="App-header">
   
            {/* <RegisterComponent apitoken = {this.getTokenfromChildComponent} user = {this.props.user} /> */}
            <LoginComponent token={this.getTokenfromChildComponent} user = {this.props.user}/>



          </header>

        </div>
      );

    } else{

      // console.log(this.state.data.user);
      return(
        
        <DashboardComponent apitoken = {this.state.data.token} user = {this.state.data.user} />

      );
    }

    };
  }

export default App;

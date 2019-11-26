import React from 'react';
import axios from 'axios';


class SearchUser extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            venues: []
        }
    }

    componentDidMount(){
        this.getVenues()
    }


    getVenues(){
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/venues',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            // console.log(res.data.data);
            this.setState({venues: res.data.data})
              console.log(this.state.venues);                

        })


    }

    render(){
        return(
        
        <React.Fragment>
            <div className="card-deck">
                {this.state.venues ? this.state.venues.map(
                    (item,index) => {
                        console.log(item.user.name);
                        return(
                        
                            
                            //Card
                            <div className="card mb-4">
                            
                            
                                <div className="view overlay">
                                <img className="card-img-top" src="/images/lex.jpeg" alt="Card"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                                </div>
                            
                                {/*Card content */}
                                <div className="card-body">
                            
                                {/*Title */}
                                <h4 className="card-title">{item.user.name}</h4>
                                {/*Text */}
                                <p className="card-text">{item.user.email}</p>
                                {/* Provides extra visual weight and identifies the primary action in a set of buttons*/}
                                <button type="button" className="btn btn-light-blue btn-md">Read more</button>
                            
                                </div>
                            
                            </div>
                        )
                    }
        
                ) : ''}

            </div>
        </React.Fragment>


        


        )
    }

}


export default SearchUser;
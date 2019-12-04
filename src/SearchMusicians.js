import React from 'react';
import axios from 'axios';
import MusicianCardFlip from './MusicianCardFlip';

class SearchMusicians extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            musicians: []
        }
    }

    componentDidMount(){
        this.getMusicians()
    }


    getMusicians(){
        axios({
            method: 'get',
            url: 'https://oneset.appspot.com/api/musicians',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            
            this.setState({musicians: res.data.data})             

        })
    }

    render(){
        return(
        
        <React.Fragment>
             {/*Card Deck*/}
            <div className="container mt-5 pb-5" style={{marginTop: "5rem", marginBottom: "3rem" , backgroundColor: "black"}}>
                {this.state.musicians ? this.state.musicians.map(
                    (item,index) => {
                      
                        return(

                                <MusicianCardFlip key={index} apitoken={this.props.apitoken} user={this.props.user} musicianinfo={this.state.musicians[index]}/>

                        )
                    }
        
                ) : ''}

            </div>
        </React.Fragment>

        )
    }

}


export default SearchMusicians;
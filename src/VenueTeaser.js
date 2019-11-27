import React from 'react';


class VenueTeaser extends React.Component {


    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    componentDidMount(){
       
        console.log(this.props.venueinfo.user.name);
        // this.setState({venues: this.props.venueinfo})
       
    }

    changeParent = () => {
        this.props.parentflip();
    }

    render(){

        return(
        
        
            <React.Fragment>
                {/*Card Deck*/}
                <div className="card-deck pt-5">
                  {/*Card*/}
                    <div className="card">
                    
                            {/*Card Image*/}
                        <div className="view overlay">
                        <img className="card-img-top" src="/images/lex.jpeg" alt="Card"/>
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                        </div>
                    
                        {/*Card content */}
                        <div className="card-body">
                    
                        {/*Title */}
                        <h4 className="card-title">{this.props.venueinfo.user.name}</h4>
                        {/*Text */}
                        <p className="card-text">{this.props.venueinfo.user.email}</p>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons*/}
                        <button onClick={this.changeParent} type="button" className="btn btn-light-blue btn-md">Read more</button>
                    
                        </div>
                            
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
    

export default VenueTeaser;
import React from 'react';


class MusicianTeaser extends React.Component {


    constructor(props){
        super(props);
        this.state ={
            
        }
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
                            <img className="card-img-top" src="/images/tenorplayer.jpeg" alt="Card"/>
                            <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>
                    
                        {/*Card content */}
                        <div className="card-body">
                    
                            {/*Title */}
                            <h4 className="card-title text-center">{this.props.musicianinfo.user.name}</h4>
                            {/*Text */}
                            
                            {/* Provides extra visual weight and identifies the primary action in a set of buttons*/}
                            <button onClick={this.changeParent} type="button" className="btn btn-blue btn-md mx-auto" 
                            style={{display: "block"}}>View Profile</button>
                    
                        </div>
                            
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
    

export default MusicianTeaser;
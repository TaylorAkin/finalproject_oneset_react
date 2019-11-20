import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faWifi, faHome} from '@fortawesome/free-solid-svg-icons'

class FooterComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {


        }
    }






    render(){

        return(
        
        <React.Fragment>
            <div className = "container bg-dark fixed-bottom">
                <div className = "row">
                    <div className = "col-3"> 
                        <Button>
                        <FontAwesomeIcon icon={faHome} size='2x'/>
                        </Button>
                    </div>
                    <div className = "col-3 mt-1"> 
                        <Button>
                            <FontAwesomeIcon icon={faSearch} size='2x'/>
                        </Button>
                    </div>
                    <div className = "col-3"> 
                        <Button>
                            <FontAwesomeIcon icon={faWifi} size='2x'/>
                        </Button>
                    </div>
                    <div className = "col-3"> 
                        <Button>
                             <img src="/images/avatar.jpeg" className="rounded float-right img-thumbnail mt-1" alt="avatar"/>
                        </Button> 
                    </div>

                </div>
            </div>



        </React.Fragment>


        );
    }
}

export default FooterComponent;




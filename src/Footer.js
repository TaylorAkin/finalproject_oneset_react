import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faWifi, faHome, faUserCircle} from '@fortawesome/free-solid-svg-icons'


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
                    <div className = "col-3 px-0"> 
                        <Button className = 'btn-mdb-color'>
                        <FontAwesomeIcon icon={faHome} size='2x'/>
                        </Button>
                    </div>
                    <div className = "col-3 px-0"> 
                        <Button className = 'btn-mdb-color'>
                            <FontAwesomeIcon icon={faSearch} size='2x'/>
                        </Button>
                    </div>
                    <div className = "col-3 px-0"> 
                        <Button className = 'btn-mdb-color'>
                            <FontAwesomeIcon icon={faWifi} size='2x'/>
                        </Button>
                    </div>
                    <div className = "col-3 px-0"> 
                        <Button className = 'btn-mdb-color'>
                            <FontAwesomeIcon icon={faUserCircle} size='2x'/>
                        </Button> 
                    </div>

                </div>
            </div>



        </React.Fragment>


        );
    }
}

export default FooterComponent;




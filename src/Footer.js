import React from 'react';
import { Button } from 'reactstrap';
import LogoutComponent from './Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faWifi, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons'


class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
       
        this.props.changepage(Number(e.currentTarget.id));
    }


    render() {

        return (

            <React.Fragment>
                <div className="container bg-dark fixed-bottom pl-0">
                    <div className="row pb-1">

                        <div className="col-3">
                            <div className="dropup">
                                <button className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <FontAwesomeIcon icon={faCog} size='3x' />
                                </button>
                                <div className="btn btn-dark dropdown-menu">
                                  <LogoutComponent apitoken={this.props.apitoken}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 mt-2">
                            <button onClick={this.clickHandler} id='2' value='2' className="btn btn-dark">
                                <FontAwesomeIcon icon={faSearch} size='3x' />
                            </button>
                        </div>

                        <div className="col-3 mt-2">
                            <button onClick={this.clickHandler} id='3' value='3' className="btn btn-dark" >
                                <FontAwesomeIcon icon={faWifi} size='3x' />
                            </button>
                        </div>

                        <div className="col-3 mt-2">
                            <button onClick={this.clickHandler} id='4' value='4' className="btn btn-dark">
                                <FontAwesomeIcon icon={faUserCircle} size='3x' />
                            </button>
                        </div>

                    </div>
                </div>

            </React.Fragment>

        );
    }
}

export default FooterComponent;




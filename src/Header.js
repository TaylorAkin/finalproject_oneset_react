import React from 'react';
import LogoutComponent from './Logout';


class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        }
    }






    render() {

        return (

            <React.Fragment>
                <div className="container bg-dark ">
                    <div className="row">
                        <div className="col-4">

                        </div>
                        <div className="col-4">
                            <h1 className='text-center text-white'>OneSet</h1>
                        </div>
                        <div className="col-4">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown link
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a className="dropdown-item" href="#"><LogoutComponent/></a>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>



            </React.Fragment>


        );
    }
}

export default HeaderComponent;




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
                            <nav class="navbar navbar-expand-lg">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown link
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#"><LogoutComponent/></a>
                                                
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




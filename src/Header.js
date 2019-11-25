import React from 'react';
import LogoutComponent from './Logout';
// import { faTintSlash } from '@fortawesome/free-solid-svg-icons';


class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        }
    }




    
    render() {
        // console.log(this.props.apitoken);

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
                             
                                <LogoutComponent  apitoken = {this.props.apitoken}/>
                            
                            </nav>
                        </div>
                    </div>
                </div>



            </React.Fragment>


        );
    }
}

export default HeaderComponent;




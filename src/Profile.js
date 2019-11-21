import React from 'react';
// import axios from 'axios';
import { MDBInput } from "mdbreact";


class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }






    render() {
        return (

            <React.Fragment>

                <div className='container py-4 text-center'>
                    'Background photo'
                <div className='row'>
                        <div className='col-4'>

                        </div>
                        <div className='col-4 border rounded-circle'>
                            `   "profile image"
                    </div>
                        <div className='col-4'>

                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row'>
                        <h1 className='text-center mx-auto'>
                          {this.props.user.name}
                    </h1>
                    </div>
                </div>

                <MDBInput type="textarea" label="Bio" rows="2" icon="pencil-alt" />

                {/* <div className = 'container'>
                    <div className="form-group shadow-textarea">
                        <label htmlFor="exampleFormControlTextarea6" className = 'text-center mx-auto'></label>
                        <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="4" placeholder="Add your bio here..."></textarea>
                    </div>
                </div> */}


            </React.Fragment>





        )
    }


}

export default ProfileComponent;
import React from 'react';
import { MDBInput } from "mdbreact";
// import { MDBChipsInput } from 'mdbreact';


class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bio: ""


        }
        this.changeValue = this.changeValue.bind(this);
        this.getBio =this.getBio.bind(this); 
        this.updateBio =this.updateBio.bind(this); 
    }

    
    changeValue(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log(e.target);
        this.setState({[name]:value})
    }


    updateBio(e){
        
        
    }
    
    //gets bio from DB. If the user has a profile, it gets it, else the value of bio is nothing. 
    async getBio(){
            if(this.props.user.profile){

                await this.setState({bio:this.props.user.profile[0].bio});

            }else{
                this.setState({bio: ""});
            }
    }


    componentDidMount(){
        this.getBio()
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
                               "profile image"
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
                <MDBInput name="bio" onChange = {this.changeValue} onBlur = {this.updateBio} type="textarea" label="Bio" rows="2" icon="pencil-alt" value = {this.state.bio} />
                
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
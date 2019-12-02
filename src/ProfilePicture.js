import React from 'react';
import { Button } from 'reactstrap';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faUpload } from '@fortawesome/free-solid-svg-icons'

 
class ProfilePicture extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { 
            picture_path: '',
        
        };
        //  this.onDrop = this.onDrop.bind(this);
         this.fileSelectedHandler =  this.fileSelectedHandler.bind(this);
         this.fileUploadHandler =  this.fileUploadHandler.bind(this);
    }
 
  

    fileSelectedHandler(e){
        console.log(e.target.files[0]);
        this.setState({picture_path: e.target.files[0]});
    }

    fileUploadHandler(e){
        console.log(e);
       
       this.props.updateprofilepic(this.state.picture_path);

    }
 
    render() {
        return (

        <React.Fragment>

            <input 
            type="file" 
            style={{display:'none'}} 
            onChange={this.fileSelectedHandler} 
            name="fileToUpload" 
            id="fileToUpload"
            ref={fileInput => this.fileInput = fileInput} />
            <button onClick={() => this.fileInput.click()} style={{backgroundColor: 'white'}}>
                    <FontAwesomeIcon icon={faCamera} size='2x' />
            </button>

            <button onClick={this.fileUploadHandler} style={{backgroundColor: 'white'}}>
                    <FontAwesomeIcon icon={faUpload} size='2x' />
            </button>
          

        </React.Fragment>
        );
    }
}

export default ProfilePicture;
import React from 'react';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faUpload } from '@fortawesome/free-solid-svg-icons'

 
class ProfilePicture extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { 
            picture_path: '',
        
        };

         this.fileSelectedHandler =  this.fileSelectedHandler.bind(this);
         this.fileUploadHandler =  this.fileUploadHandler.bind(this);
    }
 
  

    fileSelectedHandler(e){
      
        this.setState({picture_path: e.target.files[0]});
    }

    fileUploadHandler(e){
       
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
                    <FontAwesomeIcon icon={faCamera} size='1x' />
            </button>

            <button onClick={this.fileUploadHandler} style={{backgroundColor: 'white'}}>
                    <FontAwesomeIcon icon={faUpload} size='1x' />
            </button>
          

        </React.Fragment>
        );
    }
}

export default ProfilePicture;
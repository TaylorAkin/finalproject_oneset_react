import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

 
class ProfilePicture extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { 
            picture_path: '',
        
        };
        //  this.onDrop = this.onDrop.bind(this);
         this.fileSelectedHander =  this.fileSelectedHander.bind(this);
         this.fileUploadHandler =  this.fileUploadHandler.bind(this);
    }
 
  

    fileSelectedHander(e){
        console.log(e.target.files[0]);
        this.setState({picture_path: e.target.files[[0]]});
    }

    fileUploadHandler(e){
        console.log('ta');
       
       this.props.updateprofilepic(this.state.picture_path);

    }
 
    render() {
        return (

        <React.Fragment>

            {/* <form action="upload.php" method="post" enctype="multipart/form-data">
            Select image to upload: */}
            <input type="file" onChange={this.fileSelectedHander} name="fileToUpload" id="fileToUpload" />
           <Button onClick={this.fileUploadHandler} color='primary' >Upload</Button>
            {/* </form>  */}

        </React.Fragment>
        );
    }
}

export default ProfilePicture;
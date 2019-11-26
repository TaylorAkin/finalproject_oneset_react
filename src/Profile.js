import React from 'react';
import { MDBInput } from "mdbreact";
import axios from 'axios';
import { Badge } from 'reactstrap';



class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bio: "",
            tagarray: [],
            selectedtags: [],

        }
        this.changeValue = this.changeValue.bind(this);
        this.getBio = this.getBio.bind(this);
        this.updateBio = this.updateBio.bind(this);
        this.getTags = this.getTags.bind(this);
        this.myTags = this.myTags.bind(this);
        this.postTags = this.postTags.bind(this);
    }

    componentDidMount() {
        this.getBio()
        this.getTags();
    
    }

    changeValue(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log(e.target);
        this.setState({ [name]: value })
    }



    //gets bio from DB. If the user has a profile, it gets it, else the value of bio is nothing. 
    async getBio() {
        if (this.props.user.profile[0]) {

            await this.setState({ bio: this.props.user.profile[0].bio });

        } else {
            this.setState({ bio: "Add a bio" });
        }
    }




    updateBio(e) {
        console.log('ta');
        var data = { bio: this.state.bio };
        axios.post('http://127.0.0.1:8000/api/profile/' + this.props.user.id, data, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                console.log(JSON.parse(res.config.data));

                this.setState({ bio: JSON.parse(res.config.data).bio });


                //FIX LOCAL STORAGE SO IT UPDATES ON REFRESH
                // localStorage.setItem('data' , data)
            });

        e.preventDefault();
    }

    getTags(e) {
        // post request for laravel api call
        // console.log('Bearer ' + this.props.apitoken);
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/tags/',
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                // prepare new menu item array

                this.setState({ tagarray: res.data.data })

            

                console.log(this.state.tagarray);


            });
            // if(localStorage.getItem('mytags')){
            //     this.setState({selectedtags: JSON.parse(localStorage.getItem('mytags'))})
            // }

        // e.preventDefault();

    }

    postTags(e){

        console.log(this.state.selectedtags);
        var data = { 
            tags: this.state.selectedtags,
            user_id: this.props.user.id
        };
        axios.post('http://127.0.0.1:8000/api/mytags/', data, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
                console.log(JSON.parse(res.config.data));

                // this.setState({ bio: JSON.parse(res.config.data).bio });


                //FIX LOCAL STORAGE SO IT UPDATES ON REFRESH
                // localStorage.setItem('data' , data)
            });

        e.preventDefault();


    }

    async myTags(e) {
    
        // console.log(e.target.value);
        await this.setState({ selectedtags: [...this.state.selectedtags, e.target.value] });

        localStorage.setItem('mytags', JSON.stringify(this.state.selectedtags));

        console.log(this.state.selectedtags);
        
        var data = { 
            tags: this.state.selectedtags,
            musician_id: this.props.user.id
        };
        axios.post('http://127.0.0.1:8000/api/mytags', data, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            console.log(JSON.parse(res.config.data));
            //this.setState({selectedtags: JSON.parse(res.config.data)})
            // this.setState({ bio: JSON.parse(res.config.data).bio });


            //FIX LOCAL STORAGE SO IT UPDATES ON REFRESH
            // localStorage.setItem('data' , data)
        });
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
                    <div className='row justify-content-center'>
                        <h1 className='text-center mx-auto'>
                            {this.props.user.name}
                        </h1>
                    </div>
                </div>


                <MDBInput name="bio" onChange={this.changeValue} onBlur={this.updateBio} type="textarea" label="Bio" rows="2" icon="pencil-alt" value={this.state.bio} />


                <select onChange={this.myTags} className="browser-default custom-select justify-content-center">
                    <option selected>Choose a tag to be searched by</option>

                    {this.state.tagarray ? this.state.tagarray.map(
                        (tag, index) => {
                            return (

                                <option value={tag.id} key={index} name={tag.name}>{tag.name}</option>

                            )
                        }
                    ) : ''}

                </select>

                 {this.state.selectedtags ? this.state.selectedtags.map(
                        (item, index) => {
                            console.log(item);
                            var tag = this.state.tagarray.filter(obj => {                              
                                return obj.id === Number(item);
                            });
                            console.log(tag[0].id);
  
                            return (
                                
                                <Badge value={item} key={index} name={item} color="primary" pill>{tag[0].name}</Badge>

                            )
                        }
                    ) : ''}

            </React.Fragment>





        )
    }


}

export default ProfileComponent;
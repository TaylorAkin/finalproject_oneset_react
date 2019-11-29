import React from 'react';
import TagsComponent from './Tags';
import CalendarComponent from './Calendar'
import { MDBInput } from "mdbreact";
import axios from 'axios';
// import { Badge } from 'reactstrap';
// import { counter } from '@fortawesome/fontawesome-svg-core';



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
        // this.postTags = this.postTags.bind(this);
    }

    componentDidMount() {
        this.getBio()
        this.getTags();
        this.setState({selectedtags:this.props.user.musicianTags});
        console.log(this.props.user);
        console.log(this.props.user.role);
        // this.setState({bio: localStorage.getItem('bio')});
        
        // this.setState({bio: this.props.user.profile[0].bio});

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
                // console.log(JSON.parse(res.config.data));
                localStorage.setItem('bio', JSON.parse(res.config.data).bio)
                this.setState({ bio: JSON.parse(res.config.data).bio });

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
             
                this.setState({ tagarray: res.data.data })

            });
            //console.log(this.props.user.musicianTags);

            if(this.props.user.musicianTags){
            if(this.props.user.musicianTags.length > 0){
                var tmpTags = [];
                for (var i = 0; i < this.props.user.musicianTags.length; i++){
                    tmpTags.push(this.props.user.musicianTags[i]);
                    //console.log(this.props.user.musicianTags[i]);
                }
                this.setState({ selectedtags: tmpTags })
            }
            else{
                console.log('no tags');
            }
        }
        // e.preventDefault();

    }

    // postTags(e){

    //     console.log(this.state.selectedtags);
    //     var data = { 
    //         tags: this.state.selectedtags,
    //         user_id: this.props.user.id
    //     };
    //     axios.post('http://127.0.0.1:8000/api/mytags/', data, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': 'Bearer ' + this.props.apitoken,
    //         },
    //     })
    //         .then(res => {
    //             console.log(JSON.parse(res.config.data));

    //         });

    //     e.preventDefault();


    // }

    async myTags(e) {
    
        var tmpTags = [];
       if(this.state.selectedtags){
        for(var i = 0; i < this.state.selectedtags.length; i++){

            tmpTags.push(this.state.selectedtags[i].tag_id);

        }
    }

        tmpTags.push(Number(e.target.value));
        
        var data = { 
            'tags': tmpTags,
            'musician_id': this.props.user.id
        };
        console.log(data);
        axios.post('http://127.0.0.1:8000/api/mytags', data, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.props.apitoken,
            },
        })
        .then(res => {
            console.log(res.data);
            var newTags = res.data;
            // replace
            this.props.user.musicianTags = newTags;
            // Do the same thing for bio, check when complete
            localStorage.setItem('data' , JSON.stringify({'token':this.props.apitoken, 'user': this.props.user}));

            
            var selectedtags = [];
            for(var i = 0; i < newTags.length; i++){

                selectedtags.push({'tag_id':newTags[i].tag_id});
    
            }
            console.log(selectedtags);
            this.setState({selectedtags: selectedtags});
            //this.props.user.musicianTags = newTags;
            //this.setState({selectedtags: JSON.parse(res.config.data)})
            // this.setState({ bio: JSON.parse(res.config.data).bio });


            //FIX LOCAL STORAGE SO IT UPDATES ON REFRESH
            // localStorage.setItem('data' , data)
        });
    }





    render() {
        return (

            <React.Fragment>
            <div className="container pt-5" style={{paddingBottom: "23rem", backgroundColor: "black"}}>
                <div className='container py-4 text-center mt-4 text-white'>
                    'Background photo'
                <div className='row'>
                        <div className='col-4'>

                        </div>
                        <div className='col-4 border rounded-circle text-white'>
                            "profile image"
                    </div>
                        <div className='col-4'>

                        </div>
                    </div>
                </div>

                <div className='container' style={{backgroundColor: "black"}}>
                    <div className='row justify-content-center'>
                        <h1 className='text-center mx-auto text-white'>
                            {this.props.user.name}
                        </h1>
                    </div>
                </div>

               
                <MDBInput className='text-white' name="bio" onChange={this.changeValue} onBlur={this.updateBio} type="textarea" label="Bio" rows="2" icon="pencil-alt" value={this.state.bio} />

                {this.props.user.role === 'musician' ? 
                 <TagsComponent mytags={this.myTags} tagarray={this.state.tagarray} selectedtags={this.state.selectedtags}/>
                 :
                 <CalendarComponent />
                }


            </div>
            </React.Fragment>

        )}}

export default ProfileComponent;
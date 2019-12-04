import React from 'react';
import axios from 'axios';


class MusicianProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            musicianbio: [],
        }
        this.getmusicianprofile = this.getmusicianprofile.bind(this);
    }
    componentDidMount() {

        this.getmusicianprofile();

    }

    changeParent = () => {
        this.props.parentflip();
    }

    getmusicianprofile() {

        axios({
            method: 'get',
            url: 'https://oneset.appspot.com/api/profile/' + this.props.musicianinfo.user.id,
            headers: {
                Authorization: 'Bearer ' + this.props.apitoken,
            },
        })
            .then(res => {
               
                this.setState({ musicianbio: res.data.data[0].bio })
               
            });
    }

    render() {

        return (

            <React.Fragment>
                {/*Card Deck*/}
                <div className="card-deck pt-5">
                    {/*Card*/}
                    <div className="card">

                        {/*Card Image*/}
                        <div className="view overlay">
                            <img className="card-img-top" src="/images/pianoplayer.jpg" alt="Card" />
                            <a href="#!">
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        {/*Card content */}
                        <div className="card-body">

                            {/*Title */}
                            <h4 className="card-title text-center">{this.props.musicianinfo.user.name}</h4>
                            {/*Bio */}
                            <p className="card-text text-center">{this.state.musicianbio}</p>

                            <h5>Contact Info</h5>

                            <p className="card-text">{this.props.musicianinfo.user.email}</p>

                            {/* Provides extra visual weight and identifies the primary action in a set of buttons*/}
                            <button onClick={this.changeParent} type="button" className="btn btn-blue btn-md mx-auto"
                                style={{ display: "block" }}>Turn Back</button>

                        </div>

                    </div>

                </div>

            </React.Fragment>
        )
    }
}

export default MusicianProfile;
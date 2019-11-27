import React from 'react';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import Profile from './Profile';
import SearchVenues from './SearchVenues';




class DashboardComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            page: 4
        }

        this.setPageState = this.setPageState.bind(this);
    }

    componentDidMount(){
        console.log(this.props.apitoken);
    }

    setPageState(page) {
        this.setState({ page: page })

    }


    render() {

        return (

            <React.Fragment>

                <HeaderComponent apitoken={this.props.apitoken} user={this.props.user} />

                {this.state.page === 1 ? <Profile apitoken={this.props.apitoken} user={this.props.user} /> : null}
                {this.state.page === 2 ? <SearchVenues apitoken={this.props.apitoken} user={this.props.user} /> : null}
                {this.state.page === 3 ? <Profile apitoken={this.props.apitoken} user={this.props.user} /> : null}
                {this.state.page === 4 ? <Profile apitoken={this.props.apitoken} user={this.props.user} /> : null}

                <FooterComponent apitoken={this.props.apitoken} user={this.props.user} changepage={this.setPageState} />



            </React.Fragment>

        )

    }

}




export default DashboardComponent;
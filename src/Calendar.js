import React from 'react';
import { Button } from 'reactstrap';

class CalendarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h3 className='text-white mx-auto'>Current Available Openings</h3>
                </div>
                <div className='row'>
                    <h5 className='text-white mx-auto'>Select to Request</h5>
                </div>

                <div className='row justify-content-center'>

                    <div class="list-group">
                        <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">Friday, Dec 3</a>
                        <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">Thursday, Dec 12</a>
                        <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">Friday, Dec 13</a>
                        <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">Saturday, Dec 14</a>
                        <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">Saturday, Dec 28</a>
                    </div>

                </div>

            </div>
        )
    }
}

export default CalendarComponent; 
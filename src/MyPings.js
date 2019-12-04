import React from 'react';

class MyPingsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <React.Fragment>

                {this.props.user.role === 'musician' ?
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <h1 className='text-white' style={{ marginTop: "6rem"}}>{this.props.user.name}</h1>
                        </div>
                        <div className='row justify-content-center'>
                            <h1 className='text-white'>Sent Requests</h1>
                        </div>

                        <table className="table table-dark" style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Viewed</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Carsons</td>
                                    <td>Booked</td>
                                    <td>12/12/19</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Tonys</td>
                                    <td>Viewed</td>
                                    <td>12/16/19</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>A Cup of CommonWealth</td>
                                    <td>Booked</td>
                                    <td>12/28/19</td>
                                </tr>
                            </tbody>
                        </table>

                    </div> :

                    <div className='container'>

                        <div className='row justify-content-center'>
                            <h1 className='text-white' style={{ marginTop: "6rem"}}>{this.props.user.name}</h1>
                        </div>
                        <div className='row justify-content-center'>
                            <h2 className='text-white'>Received Requests</h2>
                        </div>

                        <table className="table table-dark" style={{ marginTop: "2rem", marginBottom: "3rem" }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Musician</th>
                                    <th scope="col">Date Requested</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Daniel Shouse</td>
                                    <td>12/12/19</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Liam Clark</td>
                                    <td>12/16/19</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>James Younger</td>
                                    <td>12/28/19</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>}

            </React.Fragment>

        )
    }
}

export default MyPingsComponent;
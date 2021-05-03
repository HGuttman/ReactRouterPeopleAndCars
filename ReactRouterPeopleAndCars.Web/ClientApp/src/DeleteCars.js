import React from 'react';
import axios from 'axios';
import CarRow from './CarRow';

class DeleteCars extends React.Component {
    state = {
        cars: []
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/PeopleCars/GetCarsForPerson?id=${id}`);
        this.setState({ cars: data });
    }

    cancel = () => {
        this.props.history.push('/');
    }

    onDeleteCarsClick = async () => {
        const { id } = this.props.match.params;
        await axios.post(`/api/peoplecars/DeleteCars?id=${id}`);
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map((c, i) => <CarRow car={c} key={i} />)}
                    </tbody>
                </table>
                <h1>Are you sure you want to delete all of these cars?</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <button className='btn btn-success' onClick={this.cancel}>No</button>
                    </div>
                    <div className='col-md-6'>
                        <button className='btn btn-success' onClick={this.onDeleteCarsClick}>Yes</button>
                    </div>
                </div>
            </>
        );
    }
}
export default DeleteCars;
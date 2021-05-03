import React from 'react';
import axios from 'axios';

class AddCar extends React.Component {
    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personId:''
        },
        person: {
            firstName: '',
            lastName:''
        }
    }
    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/PeopleCars/getById?id=${id}`);
        this.setState({ car: { personId: id }, person: { firstName: data.firstName, lastName: data.lastName } });
    }
    onTextChange = e => {
        const car = { ...this.state.car };
        car[e.target.name] = e.target.value;
        this.setState({ car });
    }
    addCar = async () => {
        await axios.post('/api/PeopleCars/addCar', this.state.car);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h3>Add a new car for {this.state.person.firstName}{this.state.person.lastName}</h3>
                    <input type="text" name='make' onChange={this.onTextChange} className="form-control" placeholder="Make" />
                    <br />
                    <input type="text" name='model' onChange={this.onTextChange} className="form-control" placeholder="Model" />
                    <br />
                    <input type="text" name='year' onChange={this.onTextChange} className="form-control" placeholder="Year" />
                    <br />
                    <button onClick={this.addCar} className="btn btn-primary btn-block">Add Car</button>
                </div>
            </div>

        );
    }
}
export default AddCar;
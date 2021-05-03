import React from 'react';
import axios from 'axios';

class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age:''
        }
    }
    onTextChange = e => {
        const person = { ...this.state.person };
        person[e.target.name] = e.target.value;
        this.setState({ person });
    }
    addPerson = async () => {
        await axios.post('/api/PeopleCars/AddPerson', this.state.person);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h3>Add a new person</h3>
                    <input type="text" name='firstName' onChange={this.onTextChange} className="form-control" placeholder="First Name" />
                    <br />
                    <input type="text" name='lastName' onChange={this.onTextChange} className="form-control" placeholder="Last Name" />
                    <br />
                    <input type="text" name='age' onChange={this.onTextChange} className="form-control" placeholder="Age" />
                    <br />
                    <button onClick={this.addPerson} className="btn btn-primary btn-block">Add person</button>
                </div>
            </div>
            );
    }
}
export default AddPerson;
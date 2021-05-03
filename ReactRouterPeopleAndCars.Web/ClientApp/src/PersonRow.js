import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function PersonRow({person}){
    const{firstName, lastName, age, id,cars} = person;
    return(
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{cars.length}</td>
        <td>
            <Link to ={`/addCar/${id}`}>
                <button className = "btn btn-success">Add Car</button>
            </Link>
        </td>
        <td>
            <Link to ={`/deleteCar/${id}`}>
                <button className = "btn btn-danger">Delete Car</button>
            </Link>
        </td>
    </tr>
    );
}
export default PersonRow;
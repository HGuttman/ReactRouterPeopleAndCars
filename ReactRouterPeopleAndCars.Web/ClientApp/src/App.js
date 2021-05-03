import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/addPerson' component={AddPerson} />
            <Route path='/addCar/:id' component={AddCar} />
            <Route exact path='/deleteCars/:id' component={DeleteCars} />
        </Layout>
    );
}
export default App;
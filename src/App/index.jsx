import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';

import Home from './home';
import Country from '../pages/Country';
import Persons from '../pages/Persons';

const Index = () => (
    <Fragment>
        <Router>
            <Header/>
            <main>
                <Switch>
                    <Route path="/persons" component={Persons}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </main>
            <Footer/>
        </Router>
    </Fragment>
);

export default Index;

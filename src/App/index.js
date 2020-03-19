import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Cars from '../pages/Cars'
import Country from '../pages/Country';
import Home from '../pages/Home'
import Instruments from '../pages/Instruments'

export default function BasicExample() {
    return (
    <Router>
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/country">Country</Link>
                </li>
                <li>
                    <Link to="/cars">Cars</Link>
                </li>
                                <li>
                    <Link to="/instruments">Instruments</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cars" component={Cars}/>
                <Route path="/country" component={Country}/>
                <Route path="/instruments" component={Instruments}/>
            </Switch>

        </>
    </Router>
    );
}

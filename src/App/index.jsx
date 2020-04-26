import React, {Fragment} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';

import Header from './Header';
import Footer from './Footer';

import Home from './home';
import Country from '../pages/Country';
import Persons from '../pages/Persons';

const Index = () => (
    <Fragment>
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Header/>
                        <main>
                            <Switch>
                                <Route path="/persons" component={Persons}/>
                                <Route path="/country" component={Country}/>
                                <Route path="/" component={Home}/>
                            </Switch>
                        </main>
                        <Footer/>
                    </Col>
                </Row>
            </Container>

        </Router>
    </Fragment>
);

export default Index;

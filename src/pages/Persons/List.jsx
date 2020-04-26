import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button} from 'reactstrap';

import Title from '../../components/Title';
import Table from '../../components/Table';

import {fetchPersonsRequested, deletePersonRequested} from '../../actions/persons';

class Persons extends Component {
    componentDidMount() {
        this.props.requestPersons();
    }

    render() {
        const {headers, documents} = this.props;
        return (
            <Container>
                <Row>
                    <Col sm="8">
                        <Title title="Hello Persons" />
                    </Col>
                    <Col sm="4" className="float-right mt-2">
                        <Button tag={Link} color="warning" to='/persons/new'> Nueva Persona </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table
                            {...{documents, headers, linkTo: '/persons'}}
                            onDelete={id => this.props.deletePerson(id)}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

// mapStateToProps <<<< Todo el State del Store esta aca, Tomamos el store >>> Component como props 
// mapDispatchToProps <<< Todas las acciones que vamos a Ejecutar o llamar >>> Component como props
// mergeProps <<< Fucionar acciones, y Propiedades onChange

/**
 * [ campos << >> onChange]
 */

 // Recibe 2 parametros,  1) Nuestro Store / Reducer, 2) Son todas las propiedades que vienen por Herencias
 // o Por asignacion
const mapStateToProps = state => ({
    headers: state.persons.headers,
    documents: state.persons.persons 
});

 // Recibe 2 parametros,  1) Nuestro dispatcher o disparador de acciones,
 // 2) Son todas las propiedades que vienen por Herencias o Por asignacion
const mapDispatchToProps = dispatch => ({
    requestPersons: () => dispatch(fetchPersonsRequested()),
    deletePerson: id => dispatch(deletePersonRequested(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Title from '../../components/Title';
import Table from '../../components/Table';

import {fetchPersonsRequested} from '../../actions/persons';

class Persons extends Component {
    async componentDidMount() {
        this.props.requestPersons();
    }

    render() {
        const {headers, documents} = this.props;
        return (
            <div className="Persons">
                <header className="persons-header">
                    <Title title="Hello Persons" />
                    <Link to='/persons/new'> Nueva Persona </Link>
                    <div>
                        <Table {...{documents, headers, linkTo: '/persons'}} />
                    </div>
                </header>
            </div>
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
    requestPersons: () => dispatch(fetchPersonsRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

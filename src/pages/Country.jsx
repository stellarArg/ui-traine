import React, {Component} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

import Title from '../components/Title';
import Table from '../components/Table';

import {
    fetchCountryRequested,
    fetchCountySucceeded
} from '../actions/country';

const fetchCountry = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/country');
    if (status !== 200) {
        return [];
    }
    return data;
}

class Country extends Component {
    async componentDidMount() {
        this.props.requestCountry();
        const documents = await fetchCountry();
        this.props.countrySucceeded(documents);
        this.forceUpdate();
    }

    render() {
        const {headers, documents} = this.props;
        return (
            <div className="Country">
                <header className="Country-header">
                    <Title title="Hello Country" />
                    <div>
                        <Table {...{documents, headers}} />
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
    headers: state.country.headers,
    documents: state.country.countries 
});

 // Recibe 2 parametros,  1) Nuestro dispatcher o disparador de acciones,
 // 2) Son todas las propiedades que vienen por Herencias o Por asignacion
const mapDispatchToProps = dispatch => ({
    requestCountry: () => dispatch(fetchCountryRequested()),
    countrySucceeded: countries => dispatch(fetchCountySucceeded(countries))
})

export default connect(mapStateToProps, mapDispatchToProps)(Country);

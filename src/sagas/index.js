// Root Sagas
import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_PERSONS_REQUESTED, SUBMIT_PERSON_REQUESTED, FETCH_PERSON_REQUESTED, DELETE_PERSON_REQUESTED} from '../actions/persons';

import {fetchCountry} from './country';
import {fetchPersons, submitPerson, fetchPerson, deletePerson} from './persons';

// Es una funcion de escucha
/**
 * Funciones static
 * ()* => {}
 * ( * ) yield << es una funcion de llamado
 */
export default function* root () {
    yield all([
        // Primer Parametro es nuestra Accion
        // Segundo parametro es el SAGAS a ejecutar
        takeEvery(FETCH_COUNTRY_REQUESTED, fetchCountry),
        takeEvery(FETCH_PERSONS_REQUESTED, fetchPersons),
        takeEvery(SUBMIT_PERSON_REQUESTED, submitPerson),
        takeEvery(FETCH_PERSON_REQUESTED, fetchPerson),
        takeEvery(DELETE_PERSON_REQUESTED, deletePerson)
    ]);
}
/**
 * 1 Generar Actions y Triggers
 * 2 Modificar Reducers ( parametros objetos )
 * 3 Sagas ( en este caso persons)
 * 
 * 4 root ( sagas )
 */
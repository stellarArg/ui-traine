// Root Sagas
import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_PERSONS_REQUESTED, SUBMIT_PERSON_REQUESTED} from '../actions/persons';

import {fetchCountry} from './country';
import {fetchPersons, submitPerson} from './persons';

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
        takeEvery(SUBMIT_PERSON_REQUESTED, submitPerson)
    ]);
}

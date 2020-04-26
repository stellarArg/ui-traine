import {call, put, select} from 'redux-saga/effects';

import PersonsService from '../services/persons';
import {fetchPersonsSucceeded, submitPersonSucceeded, fetchPersonSucceeded, deletePersonSucceeded} from '../actions/persons';

/**
 *  Método call de sagas permite incluir la funcion separado por coma todos los parametros necesarios
 * EJ
 * call (miFunction, parametro1, parametro2, parametro3, .....etc)
 * function(1, 2, 3, 4)
 * 
 */
export function* fetchPersons({filter}) {
    const persons = yield call(PersonsService.apiCall, filter);
    yield put(fetchPersonsSucceeded(persons));
}

export function* submitPerson() {
    const {currentPersons} = yield select(state => state.persons);
    const {status, data} = yield call(PersonsService.apiSave, currentPersons);
    yield put(submitPersonSucceeded(status, data));
}

export function* fetchPerson({id}) {
    const person = yield call(PersonsService.apiCallOne, id);
    yield put(fetchPersonSucceeded(person));
}

export function* deletePerson({id}) {
    yield call(PersonsService.apiDelete, id);
    yield put(deletePersonSucceeded(true));
    yield call(fetchPersons, {});
}
import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchPersonsSucceeded, submitPersonSucceeded} from '../actions/persons';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/persons');
    if (status !== 200) {
        return [];
    }
    return data;
}

const apiSave = async person => {
    try {
        let result;
        if (person.id) {
            result = await Axios.put(`http://localhost:3001/api/persons/${person.id}`, person);
        } else {
            result = await Axios.post('http://localhost:3001/api/persons', person);
        }

        return result;
    } catch (err) {
        return {status: 500, data: null};
    }
    
}

/**
 *  Método call de sagas permite incluir la funcion separado por coma todos los parametros necesarios
 * EJ
 * call (miFunction, parametro1, parametro2, parametro3, .....etc)
 * function(1, 2, 3, 4)
 * 
 */

export function* fetchPersons({filter}) {
    const persons = yield call(apiCall, filter);
    yield put(fetchPersonsSucceeded(persons));
}


export function* submitPerson() {
    const {currentPersons} = yield select(state => state.persons);
    const {status, data} = yield call(apiSave, currentPersons);
    yield put(submitPersonSucceeded(status, data));
}
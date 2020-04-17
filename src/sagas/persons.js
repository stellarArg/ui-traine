import {call, put} from 'redux-saga/effects';
import Axios from 'axios';

import {fetchPersonsSucceeded} from '../actions/persons';

const apiCall = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/persons');
    if (status !== 200) {
        return [];
    }
    return data;
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
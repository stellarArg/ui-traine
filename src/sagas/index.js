// Root Sagas
import {all, takeEvery} from 'redux-saga/effects';

// Es una funcion de escucha
/**
 * Funciones static
 * ()* => {}
 * ( * ) yield << es una funcion de llamado
 */
export default function* root () {
    yield all([])
}

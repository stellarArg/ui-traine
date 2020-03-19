import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';

import {fetchCountries} from './country'

export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries)
    ])
}

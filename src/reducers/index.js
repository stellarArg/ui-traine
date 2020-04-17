import {combineReducers} from 'redux';

import country from './country';
import persons from './persons';

export default combineReducers({
    country,
    persons
});

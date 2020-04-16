import {
    FETCH_COUNTRY_REQUESTED,
    FETCH_COUNTRY_SUCCEEDED
} from '../actions/country'

const initialState = {
    countries: [],
    headers: [
        {
            label: 'Nombre',
            key: 'name'
        }, {
            label: 'Codigo',
            key: 'code'
        }, {
            label: 'ID',
            key: 'id'
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRY_REQUESTED:
            return {...state, countries: []};
        case FETCH_COUNTRY_SUCCEEDED:
            return {...state, countries: action.countries};
        default:
            return {...state};
    }
}
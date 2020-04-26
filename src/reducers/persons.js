import {
    FETCH_PERSONS_REQUESTED,
    FETCH_PERSONS_SUCCEEDED,
    FETCH_PERSON_REQUESTED,
    FETCH_PERSON_SUCCEEDED,
    UPDATE_PERSONS
} from '../actions/persons'

const initialState = {
    persons: [],
    currentPersons: {
        name: '',
        surname: '',
        email: '',
        gender: '',
        avatar: ''
    },
    headers: [
        {
            label: 'Nombre',
            key: 'name'
        }, {
            label: 'Apellido',
            key: 'surname'
        }, {
            label: 'E-Mail',
            key: 'email'
        }, {
            label: 'Genero',
            key: 'gender'
        }, {
            label: 'Avatar',
            key: 'avatar',
            media: true
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PERSONS_REQUESTED:
            return {...state, persons: []};
        case FETCH_PERSONS_SUCCEEDED:
            return {...state, persons: action.persons};
        case FETCH_PERSON_REQUESTED:
            return {...state, currentPersons: initialState.currentPersons};
        case FETCH_PERSON_SUCCEEDED:
            return {...state, currentPersons: action.person};
        case UPDATE_PERSONS:
            return {...state, currentPersons: action.person};
        default:
            return {...state};
    }
}
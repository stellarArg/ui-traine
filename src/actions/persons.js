
export const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED'; // >>> Accion Acciones
export const FETCH_PERSONS_SUCCEEDED = 'FETCH_PERSONS_SUCCEEDED'; // <<< Reaccion Acciones

export const fetchPersonsRequested = () => ({type: FETCH_PERSONS_REQUESTED}); // Disparador
export const fetchPersonsSucceeded = persons => ({type: FETCH_PERSONS_SUCCEEDED, persons}); // Disparador

export const FETCH_PERSON_REQUESTED = 'FETCH_PERSON_REQUESTED'; // >>> Accion Acciones
export const FETCH_PERSON_SUCCEEDED = 'FETCH_PERSON_SUCCEEDED'; // <<< Reaccion Acciones

export const fetchPersonRequested = id => ({type: FETCH_PERSON_REQUESTED, id}); // Disparador | trigger
export const fetchPersonSucceeded = person => ({type: FETCH_PERSON_SUCCEEDED, person}); // Disparador | trigger

export const UPDATE_PERSONS = 'UPDATE_PERSONS';
export const updatePersons = person => ({type: UPDATE_PERSONS, person});

export const SUBMIT_PERSON_REQUESTED = 'SUBMIT_PERSON_REQUESTED';
export const submitPersonRequested = () => ({type: SUBMIT_PERSON_REQUESTED});

export const SUBMIT_PERSON_SUCCEEDED = 'SUBMIT_PERSON_SUCCEEDED';
export const submitPersonSucceeded = (status, data) => ({type: SUBMIT_PERSON_SUCCEEDED, status, data});

export const DELETE_PERSON_REQUESTED = 'DELETE_PERSON_REQUESTED';
export const DELETE_PERSON_SUCCEEDED = 'DELETE_PERSON_SUCCEEDED';

export const deletePersonRequested = id => ({type: DELETE_PERSON_REQUESTED, id});
export const deletePersonSucceeded = () => ({type: DELETE_PERSON_SUCCEEDED});
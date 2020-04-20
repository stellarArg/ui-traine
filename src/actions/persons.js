
export const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED'; // >>>Accion Acciones
export const FETCH_PERSONS_SUCCEEDED = 'FETCH_PERSONS_SUCCEEDED'; // <<< Reaccion Acciones

export const fetchPersonsRequested = () => ({type: FETCH_PERSONS_REQUESTED}); // Disparador
export const fetchPersonsSucceeded = persons => ({type: FETCH_PERSONS_SUCCEEDED, persons}); // Disparador

export const UPDATE_PERSONS = 'UPDATE_PERSONS';
export const updatePersons = person => ({type: UPDATE_PERSONS, person});

export const SUBMIT_PERSON_REQUESTED = 'SUBMIT_PERSON_REQUESTED';
export const submitPersonRequested = () => ({type: SUBMIT_PERSON_REQUESTED});

export const SUBMIT_PERSON_SUCCEEDED = 'SUBMIT_PERSON_SUCCEEDED';
export const submitPersonSucceeded = (status, data) => ({type: SUBMIT_PERSON_SUCCEEDED, status, data});
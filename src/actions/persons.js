
export const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED'; // >>>Accion Acciones
export const FETCH_PERSONS_SUCCEEDED = 'FETCH_PERSONS_SUCCEEDED'; // <<< Reaccion Acciones

export const fetchPersonsRequested = () => ({type: FETCH_PERSONS_REQUESTED}); // Disparador
export const fetchPersonsSucceeded = persons => ({type: FETCH_PERSONS_SUCCEEDED, persons}); // Disparador

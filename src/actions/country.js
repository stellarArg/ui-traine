
export const FETCH_COUNTRY_REQUESTED = 'FETCH_COUNTRY_REQUESTED'; // >>>Accion Acciones
export const FETCH_COUNTRY_SUCCEEDED = 'FETCH_COUNTRY_SUCCEEDED'; // <<< Reaccion Acciones

export const fetchCountryRequested = () => ({type: FETCH_COUNTRY_REQUESTED}); // Disparador
export const fetchCountySucceeded = countries => ({type: FETCH_COUNTRY_SUCCEEDED, countries}); // Disparador

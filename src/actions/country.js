export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; // Accion | Action
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED'; // Accion | Action

export const fetchCountriesRequested = filter => ({type: FETCH_COUNTRIES_REQUESTED, filter}) // Disparador o Action Creator
export const fetchCountriesSucceeded = countries => ({
    type: FETCH_COUNTRIES_SUCCEEDED,
    countries
}) // Disparador o Action Creator

export const SORT_COUNTRY = 'SORT_COUNTRY';
export const sortCountry = sort => ({type: SORT_COUNTRY, sort});

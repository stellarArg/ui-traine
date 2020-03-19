import Http from '.';

const API = 'api/countries';

class Country {
    static fetch() {
        return Http.get(API);
    }
}

export default Country;

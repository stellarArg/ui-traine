import Axios from 'axios';

import HTTP from './http';

export default class Person {
    static async apiSave(person) {
        try {
            let result;
            if (person.id) {
                result = await Axios.put(`http://localhost:3001/api/persons/${person.id}`, person);
            } else {
                result = await Axios.post('http://localhost:3001/api/persons', person);
            }
    
            return result;
        } catch (err) {
            return {status: 500, data: null};
        }
    }

    static async apiCall() {
        return HTTP.get('api/persons');
    }

    static async apiCallOne (id) {
        return HTTP.get(`api/persons/${id}`);
    }

    static async apiDelete (id) {
        const {data, status} = await Axios.delete(`http://localhost:3001/api/persons/${id}`);
        if (status !== 200) {
            return {};
        }
        return data;
    }
}
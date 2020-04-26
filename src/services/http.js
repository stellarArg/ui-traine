
const API = 'http://localhost:3001/';

class HTTP {
    static async get(url) {
        const response = await fetch(`${API}${url}`);
        try {
            if (response.ok) {
                return response.json();
            }
            return {error: true};
        } catch(err) {
            return {error: true};
        }
    }
}


export default HTTP;
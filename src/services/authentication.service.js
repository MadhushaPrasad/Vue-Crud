import axios from "axios";

const api_url = process.env.BASE_URL;

class AuthenticationService {

    login(user) {
        return axios.post(api_url, user);
    }

    register(user) {
        alert('hello')
        return axios.post(api_url, user);
    }

}

export default new AuthenticationService();
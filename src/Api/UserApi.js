import axios from 'axios';

export default class UserApi {
    static getAllUsers() {
        return axios.get("http://localhost:3001/Users")
            .then(res => res.data);
    }

    static addUser(user) {
        return axios.post("http://localhost:3001/Users", user)
            .then(res => res.data)
    }

}

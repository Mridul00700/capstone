import axios from 'axios';

export default class TrendsApi {
    static getAllTrends() {
        return axios.get("http://localhost:3000/Trends")
            .then(res => res.data);
    }

    static addTrends(issue) {
        return axios.post("http://localhost:3000/Trends", issue)
            .then(res => res.data)
    }

    static editTrends(issue) {
        return axios.patch(`http://localhost:3000/Trends/${issue.id}`, issue)
            .then(res => res.data)
    }
}
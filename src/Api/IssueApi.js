import axios from 'axios';
import uuid from 'react-uuid';

export default class IssueApi {
    static getAllIssues() {
        return axios.get("http://localhost:3001/issues")
            .then(res => res.data);
    }

    static saveIssue(issue) {
        issue.id = uuid();
        return axios.post("http://localhost:3001/issues", issue)
            .then(res => res.data)
    }

    static deleteIssue(id) {
        return axios.delete("http://localhost:3001/issues/", id);
    };

    static editIssue(issue) {
        console.log(issue.id);
        return axios.put(`http://localhost:3001/issues/${issue.id}`, issue).then(res => res.data)
    }
}





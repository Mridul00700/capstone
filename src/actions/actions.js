import * as types from '../actionTypes/actionTypes';
import IssueApi from '../Api/IssueApi';
import UserApi from '../Api/UserApi';
import TrendsApi from '../Api/TrendsApi';

export function getAllUsersSuccess(Users) {
    return { type: types.GET_ALL_USERS_SUCCESS, Users }
}


export function loadAllIssuesSuccess(Issues) {
    return { type: types.LOAD_ALL_ISSUES_SUCCESS, Issues }
}

export function deleteIssueSuccess(id) {
    return { type: types.DELETE_ISSUE_SUCCESS, id }
}


export function registerUserSuccess(User) {
    return { type: types.REGISTER_USER_SUCCESS, User }
}

export function addIssueSuccess(Issue) {
    return { type: types.ADD_ISSUE_SUCCESS, Issue }
}

export function editIssueSuccess(issue) {
    // console.log(issue);
    return { type: types.EDIT_ISSUE_SUCCESS, issue }
}

export function updateTrendSuccess(issue) {
    return { type: types.UPDATE_TRENDS_DATA, issue }
}

export function addTrendSuccess(issue) {
    return { type: types.SET_TRENDS_DATA, issue }
}

export function getAllTrendsSuccess(Trends) {
    return { type: types.GET_TRENDS, Trends }
}


export function getTrends() {
    return function (dispatch) {
        return TrendsApi.getAllTrends().then(Trends => {
            dispatch(getAllTrendsSuccess(Trends));
        }).catch(error => {
            throw error;
        });
    }
}

export function editTrends(issue) {
    return function (dispatch) {
        return TrendsApi.editTrends(issue).then(issue => {
            dispatch(updateTrendSuccess(issue));
        }).catch(error => {
            throw error;
        });
    }
}

export function addTrends(issue) {
    console.log(issue)
    return function (dispatch) {
        return TrendsApi.addTrends(issue).then(issue => {
            console.log(issue)
            dispatch(addTrendSuccess(issue))
        }).catch(error => {
            throw error;
        });
    }
}


export function loadUsers() {
    return function (dispatch) {
        return UserApi.getAllUsers().then(users => {
            dispatch(getAllUsersSuccess(users));
        }).catch(error => {
            throw (error);
        });
    };
}

export function editIssue(issue) {
    return function (dispatch) {
        return IssueApi.editIssue(issue).then(issue => {
            dispatch(editIssueSuccess(issue))
        }).catch(error => {
            throw (error)
        })
    }
}

export function addUser(user) {
    return function (dispatch) {
        return UserApi.addUser(user).then(user => {
            dispatch(registerUserSuccess(user));
        }).catch(error => {
            throw (error);
        });
    };
}


export function loadIssues() {
    return function (dispatch) {
        return IssueApi.getAllIssues().then(issues => {
            dispatch(loadAllIssuesSuccess(issues));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addIssue(issue) {
    return function (dispatch) {
        return IssueApi.saveIssue(issue).then(issue => {
            dispatch(addIssueSuccess(issue));
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteIssue(id) {
    return function (dispatch) {
        return IssueApi.deleteIssue(id).then(() => {
            dispatch(deleteIssueSuccess(id));
        }).catch(error => {
            throw (error);
        });
    };
}


import * as types from '../actionTypes/actionTypes';
import IssueApi from '../Api/IssueApi';
import UserApi from '../Api/UserApi';


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

export function loadUsers() {
    return function (dispatch) {
        return UserApi.getAllUsers().then(users => {
            dispatch(getAllUsersSuccess(users));
        }).catch(error => {
            throw (error);
        });
    };
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



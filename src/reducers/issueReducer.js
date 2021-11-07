import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    Issues: []
}

export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_ALL_ISSUES_SUCCESS:
            return { Issues: action.Issues }
        case actionTypes.ADD_ISSUE_SUCCESS:
            return { Issues: [...state.Issues, action.Issue] }
        case actionTypes.DELETE_ISSUE_SUCCESS:
            let newState = { Issues: state.Issues.filter(issue => issue.id !== action.id) }
            return newState;
        case actionTypes.EDIT_ISSUE_SUCCESS:
            console.log(action.issue, state.Issues);
            let newState1 = { Issues: state.Issues.filter(issue => issue.id !== action.issue.id) }
            newState1.Issues.push(action.issue)
            console.log(newState1);
            return newState1
        default:
            return state;
    }
}
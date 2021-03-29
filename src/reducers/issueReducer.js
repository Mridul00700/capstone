import * as actionTypes from '../actionTypes/actionTypes';



export default function issueReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.LOAD_ALL_ISSUES_SUCCESS:
            return action.Issues
        case actionTypes.ADD_ISSUE_SUCCESS:
            return [...state, action.Issue]
        case actionTypes.DELETE_ISSUE_SUCCESS:
            let newState = state.filter(issue => issue.id !== action.id);
            return newState;
        default:
            return state;
    }
}
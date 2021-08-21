import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    Issues: []
}

export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_ALL_ISSUES_SUCCESS:
            return { Issues: action.Issues }
        case actionTypes.ADD_ISSUE_SUCCESS:
            return { Issues: [...state, action.Issue] }
        case actionTypes.DELETE_ISSUE_SUCCESS:
            let newState = state.Issues.filter(issue => issue.id !== action.id);
            return newState;
        default:
            return state;
    }
}
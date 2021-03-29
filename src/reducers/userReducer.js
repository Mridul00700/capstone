import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    Users: [],
    isAuthenticated: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REGISTER_USER_SUCCESS:
            return { ...state, Users: [...state.Users, action.Issue] }
        case actionTypes.IS_AUTHENTICATED:
            return { ...state, isAuthenticated: true }
        case actionTypes.GET_ALL_USERS_SUCCESS:
            return { Users: action.Users, ...state }
        default:
            return state;
    }
}
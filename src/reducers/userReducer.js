import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    Users: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REGISTER_USER_SUCCESS:
            return { Users: [...state.Users, action.User] }
        case actionTypes.GET_ALL_USERS_SUCCESS:
            return { Users: action.Users }
        default:
            return state;
    }
}
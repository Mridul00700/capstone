import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    issueReducer,
    userReducer
})

export default rootReducer;
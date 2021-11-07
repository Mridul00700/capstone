import { combineReducers } from 'redux';
import issueReducer from './issueReducer';
import userReducer from './userReducer';
import trendingIssueReducer from './trendingIssueReducer';

const rootReducer = combineReducers({
    issueReducer,
    userReducer,
    trendingIssueReducer
})

export default rootReducer;
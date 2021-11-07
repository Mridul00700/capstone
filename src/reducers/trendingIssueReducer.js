import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    Trends: []
}


export default function trendingIssueReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_TRENDS:
            return {
                Trends: action.Trends
            }
        case actionTypes.UPDATE_TRENDS_DATA:
            const existingTrendIndex = state.Trends.findIndex(trend => trend.id === action.issue.id)
            let updatedTrends = [...state.Trends];
            updatedTrends[existingTrendIndex] = action.issue
            return {
                Trends: updatedTrends
            }
        case actionTypes.SET_TRENDS_DATA:
            let newTrend = [...state.Trends]
            newTrend.push(action.issue);
            return {
                Trends: newTrend
            }
        default:
            return state
    }
}



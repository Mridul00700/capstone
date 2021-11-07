import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    Trend: []
}


export default function TrendingIssueReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_TRENDS:
            return {
                Trend: action.Trends
            }
        case actionTypes.UPDATE_TRENDS_DATA:
            const existingTrendIndex = state.Trend.findIndex(trend => trend.id === action.issue.id)
            let updatedTrends = [...state.Trend];
            updatedTrends[existingTrendIndex] = action.issue
            return {
                updatedTrends
            }
        case actionTypes.SET_TRENDS_DATA:
            let newTrend = state.Trend.push(action.issue)
            return {
                newTrend
            }
        default:
    }
}



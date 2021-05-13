import { useState } from 'react';
import { connect } from 'react-redux';
import ViewDetails from './ViewRegistrationDetails';
import * as userAction from '../../actions/actions';
import { bindActionCreators } from 'redux';
import Login from './LoginUser';

const Authentication = props => {

    if (!props.isAuthenticated) {
        return <Login />
    }
    return <ViewDetails />




}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.userReducer.isAuthenticated
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(userAction, dispatch)
//     }
// }

export default connect(mapStateToProps, null)(Authentication);


import { useContext } from 'react';
import ViewDetails from './ViewRegistrationDetails';
import Login from './LoginUser';
import { CurrentUserContext } from '../../context';

const Authentication = props => {

    const user = useContext(CurrentUserContext).currentUser;


    if (user === "")
        return <Login />
    return <ViewDetails />
}

export default Authentication;

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(userAction, dispatch)
//     }
// }



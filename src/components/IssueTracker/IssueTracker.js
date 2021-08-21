import { connect } from "react-redux";
import * as actions from '../../actions';


const IssueTracker = props => {

    console.log(props.Issues);


    return (
        <div>IssueTracker</div>
    )

}



const mapStateToProps = (state) => {
    return {
        Issues: state.issueReducer.Issues
    }
}

const mapDispatchToProps = (dispatch) => {
    deleteIssue: (id) => { dispatch(actions.deleteIssue(id)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTracker);
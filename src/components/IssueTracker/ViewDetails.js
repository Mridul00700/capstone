import { connect } from "react-redux";



function ViewDetails(props) {

    return (
        <div>
            Details
        </div>
    )
}


const mapStateToProps = state => {
    return {
        Issues: state.issueReducer.Issues
    }
}

export default connect(mapStateToProps, null)(ViewDetails);


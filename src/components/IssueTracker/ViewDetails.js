import { connect } from "react-redux";
import { useParams } from 'react-router-dom';


function ViewDetails(props) {
    const { id } = useParams();
    // console.log(id);
    // const issues = props.Issues;
    const issue = props.Issues.filter(issue => issue.id === id)
    console.log(issue);
    return (
        <>
            <label>Issue Details</label>
            <div className="viewDetails">
                <div>{issue[0].title}</div>
                <div>{issue[0].dateCreated}</div>
                <div>{issue[0].severity}</div>
                <div>{issue[0].status}</div>
                <div>{issue[0].dateResolved}</div>
                <div>{issue[0].description}</div>
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        Issues: state.issueReducer.Issues
    }
}

export default connect(mapStateToProps, null)(ViewDetails);


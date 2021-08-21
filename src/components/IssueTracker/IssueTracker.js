import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import * as actions from '../../actions/actions';

import MaterialTable from "material-table";

const IssueTracker = props => {

    let id = 1;
    const [tableData, setTableData] = useState([]);
    const columns = [
        { title: "ID", field: "id", align: "center" },
        { title: "Created Date", field: "createdDate", align: "center" },
        { title: "Severity", field: "severity", align: "center" },
        { title: "Title", field: "title", align: "center" },
        { title: "Date Resolved", field: "dateResolved", align: "center" },
        { title: "Status", field: "status", align: "center" },
    ]

    useEffect(() => {
        setTableData(props.Issues.map(issue => {
            return { id: id++, createdDate: issue.dateCreated, severity: issue.severity, title: issue.title, dateResolved: issue.dateResolved, status: issue.status }
        }));
    }, []);

    console.log(props.Issues);

    return (
        <MaterialTable
            columns={columns}
            data={tableData}
            title="Issues List"
            options={{ pageSizeOptions: [1, 2, 5, 10, 15, 25, 50, 100] }}
        />

    );

}



const mapStateToProps = (state) => {
    return {
        Issues: state.issueReducer.Issues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteIssue: id => { dispatch(actions.deleteIssue(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTracker);
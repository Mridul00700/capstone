import { connect } from "react-redux";
import { useState, useEffect, useContext } from 'react';
import * as actions from '../../actions/actions';
import MaterialTable from "material-table";
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { CurrentUserContext } from '../../context';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from "moment";
import { Link } from 'react-router-dom';
import classes from './IssueTracker.module.css';



const IssueTracker = props => {

    let id = 1;
    const [tableData, setTableData] = useState([]);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const user = useContext(CurrentUserContext).currentUser;
    const columns = [
        { title: "_ID", field: "_id", hidden: true },
        { title: "Description", field: "_description", hidden: true },
        { title: "ID", field: "id", align: "center", editable: "false" },
        {
            title: "Created Date", field: "createdDate", align: "center", render: (row) => moment(row.createdDate).format("DD/MM/YYYY"), editComponent: (table) => {
                // console.log(row); 
                const { rowData: row } = table;
                console.log(table);
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                // label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={row.createdDate}
                                onChange={(date) => {
                                    table.onChange(moment(date).format("YYYY/MM/DD"))
                                }}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }} />
                        </Grid>
                    </MuiPickersUtilsProvider>)
            }
        },
        { title: "Severity", field: "severity", align: "center" },
        { title: "Title", field: "title", align: "center" },
        { title: "Date Resolved", field: "dateResolved", align: "center", emptyField: "Null" },
        { title: "Status", field: "status", align: "center" },
        {
            title: "View Details", render: (row) => {
                return (
                    user.length > 0 ? <Link to={`/issues/viewdetails/${row._id}`}> View Details</Link> : <Link to="/authentication">View Details(Please Login)</Link>
                )
            }
        }
        // {title: "Actions", field: "actions", align: "center" }
    ]
    //  render: () => <><EditIcon color="primary" padding="10px"></EditIcon> <DeleteIcon color="secondary"></DeleteIcon></>
    useEffect(() => {
        setTableData(props.Issues.map(issue => {
            return { _id: issue.id, id: id++, description: issue.description, severity: issue.severity, title: issue.title, status: issue.status, createdDate: issue.dateCreated, resolvedDate: issue.dateResolved }
        }));
    }, []);

    console.log(props.Issues);

    return (<>
        <div className={classes['create-button']}>
            <Button variant="contained" color="secondary" disabled={!user.length > 0}>Create New Issue</Button>
        </div>
        <div className={classes.container}>
            <MaterialTable
                className={classes.table}
                columns={columns}
                editable={{
                    onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
                        // const newData = tableData.filter(data => data._id !== oldRow._id)
                        // newData.push(newRow)
                        // console.log(newData);
                        // setTableData(newData)
                        const newData = {
                            id: oldRow._id,
                            dateCreated: newRow.createdDate,
                            title: newRow.title,
                            severity: newRow.severity,
                            status: newRow.status,
                            dateResolved: newRow.resolvedDate,
                            description: oldRow.description
                        }
                        const newTabelData = [...tableData]
                        newTabelData[oldRow.tableData.id] = newRow;
                        setTableData(newTabelData);
                        props.editIssue(newData);
                        setTimeout(() => resolve(), 500);
                    }),
                    onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
                        props.deleteIssue(selectedRow._id)
                        const newTableData = tableData.filter(data => data._id !== selectedRow._id)
                        setTableData(newTableData);
                        setTimeout(() => resolve(), 500);
                    })
                }}
                data={tableData}
                title="Issues List"
                options={{ pageSizeOptions: [1, 2, 5], actionsColumnIndex: -1, overflowY: 'scroll' }}
            />
        </div>
    </>
    );
}



const mapStateToProps = (state) => {
    return {
        Issues: state.issueReducer.Issues
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteIssue: id => { dispatch(actions.deleteIssue(id)) },
        editIssue: issue => { dispatch(actions.editIssue(issue)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueTracker);
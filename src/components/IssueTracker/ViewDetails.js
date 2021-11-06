import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    customBorderRadius: {
        borderRadius: 25,
        padding: 25,
        width: 1000,
        direction: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}));


function ViewDetails(props) {
    const { id } = useParams();
    const classes = useStyles();
    // console.log(id);
    // const issues = props.Issues;
    const issue = props.Issues.filter(issue => issue.id === id)
    return (<>
        <h3 style={{ display: "flex", justifyContent: "center" }}>Issues Detail</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Paper elevation={6} className={classes.customBorderRadius}>
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <div>Title : {issue[0].title}</div>
                    <div>Date Created: {issue[0].dateCreated}</div>
                    <div>Severity : {issue[0].severity}</div>
                    <div>Status : {issue[0].status}</div>
                    <div>Date Resolved : {issue[0].dateResolved}</div>
                    <div>Description: {issue[0].description}</div>
                </div>
            </Paper>
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


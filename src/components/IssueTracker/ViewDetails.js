import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from 'react';
import * as actions from '../../actions/actions';

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


function ViewDetails({ Issues, Trends, editTrend, addTrend }) {
    const { id } = useParams();
    const classes = useStyles();
    const [insights, setInsights] = useState(false);
    // console.log(id);
    // const issues = props.Issues;
    const issue = Issues.filter(issue => issue.id === id)



    useEffect(() => {
        let existingTrend = Trends.filter(issue => issue.id === id)
        console.log(existingTrend)
        if (existingTrend.length > 0) {
            let existingTrendObj = { ...existingTrend[0], views: existingTrend[0].views + 1 }
            editTrend(existingTrendObj);
        }
        else {
            let issue = Issues.filter(issue => issue.id === id)
            issue = { ...issue[0], views: 1 }
            console.log(issue);
            addTrend(issue)
        }

    }, []);

    console.log(Trends);

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
        Issues: state.issueReducer.Issues,
        Trends: state.trendingIssueReducer.Trends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTrend: issue => { dispatch(actions.addTrends(issue)) },
        editTrend: issue => { dispatch(actions.editTrends(issue)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDetails);


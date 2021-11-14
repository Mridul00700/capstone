import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from 'react';
import * as actions from '../../actions/actions';
import { Button } from "@material-ui/core";
import { Line, Bar } from "react-chartjs-2";

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
    const issue = { ...Issues.filter(issue => issue.id === id)[0] }



    useEffect(() => {
        let existingTrend = Trends.filter(issue => issue.id === id)
        console.log(existingTrend)
        if (existingTrend.length > 0) {
            let existingTrendObj = { ...existingTrend[0], views: existingTrend[0].views + 1 }
            editTrend(existingTrendObj);
        }
        else {
            let issue1 = Issues.filter(issue => issue.id === id)
            issue1 = { ...issue1[0], views: 1 }
            console.log(issue1);
            addTrend(issue1)
        }

    }, []);

    console.log(Trends, Trends.map(issue => issue.title), Trends.map(issue => issue.views));


    const insightHandler = () => {
        setInsights(!insights);
    }

    return (<>
        <h3 style={{ display: "flex", justifyContent: "center" }}>Issues Detail</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Paper elevation={6} className={classes.customBorderRadius}>
                <div style={{ display: "grid", justifyContent: "center" }}>
                    <div>Title : {issue.title}</div>
                    <div>Date Created: {issue.dateCreated}</div>
                    <div>Severity : {issue.severity}</div>
                    <div>Status : {issue.status}</div>
                    <div>Date Resolved : {issue.dateResolved}</div>
                    <div>Description: {issue.description}</div>
                </div>
            </Paper>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="secondary" onClick={insightHandler} >{insights ? 'Hide Insights' : 'Show Insights'}</Button>
        </div>
        <div>
            {
                insights && <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "10%" }} ><Line
                    data={{
                        labels: Trends.map(issue => issue.title),
                        datasets: [
                            {
                                label: "Issues-Trends",
                                data: Trends.map(issue => issue.views),
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            }
                        ]
                    }}
                />
                </div>
            }
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


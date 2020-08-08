import React from 'react';

import Admin from './admin';
import Consultant from './consultant';
import EditPlan from './consultant/EditPlan';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const Dashboard = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin" exact>
                    <Admin />
                </Route>
                <Route path="/consultant" exact>
                    <Consultant token={props.user.token} role={props.user.role} />
                </Route>
            </Switch>
            {
                props.user.role === 'admin' ?
                    <Redirect to="/admin" /> :
                    <Redirect to="/consultant" />
            }
        </Router>
    )
}

export default Dashboard;
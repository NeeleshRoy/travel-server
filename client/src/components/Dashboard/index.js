import React from 'react';

import Admin from './admin';
import Consultant from './consultant';

const Dashboard = (props) => {
    return (
        props.role === 'admin' ? <Admin /> :
            <Consultant token={props.user.token} role={props.user.role} />
    )
}

export default Dashboard;
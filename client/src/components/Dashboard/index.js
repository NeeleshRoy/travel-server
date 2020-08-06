import React from 'react';

import Admin from './Admin';
import Consultant from './Consultant';

const Dashboard = (props) => {
    return (
        props.role === 'admin' ? <Admin /> :
            <Consultant token={props.user.token} role={props.user.role} />
    )
}

export default Dashboard;
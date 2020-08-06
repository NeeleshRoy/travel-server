import React from 'react';
import LoginForm from './LoginForm';

function FrontPage(props) {
    return (
        <div className="columns">
            <div className="column">
                <h1>Travel Administration</h1>
            </div>
            <div className="column">
                <LoginForm initiateLogin={props.initiateLogin} />
            </div>
        </div>
    )
}

export default FrontPage

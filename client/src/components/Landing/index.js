import React from 'react';
import LoginForm from './LoginForm';
import 'bulma/css/bulma.css';

const Landing = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <h1>Travel Administration</h1>
                </div>
                <div className="column">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Landing;
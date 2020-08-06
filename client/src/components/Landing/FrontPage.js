import React from 'react';
import LoginForm from './LoginForm';

function FrontPage(props) {
    return (
        <div className="frontpage">
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <div className="section">
                        <div className="hero has-background-link-light">
                            <div className="hero-body">
                                <h3 className="is-size-3 has-text-weight-bold">Travel Administration</h3>
                                <LoginForm initiateLogin={props.initiateLogin} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://source.unsplash.com/1600x900/?travel,nature" className="home-bg" alt="" />
        </div>
    )
}

export default FrontPage

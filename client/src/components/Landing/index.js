import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import FrontPage from './FrontPage';
import 'bulma/css/bulma.css';
import { useCookies } from 'react-cookie';

function Landing() {
    const [isLoggedIn, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [at, setToken] = useCookies('at');

    function initiateLogin(user) {
        const { token, role } = user;
        setUser({ token, role });
        setToken('at', token, { maxAge: 10800 });

        setLogin(true);
    }

    return (
        <div>
            <div className="container">
                {isLoggedIn ?
                    <Dashboard user={user} /> :
                    <FrontPage initiateLogin={initiateLogin} />}
            </div>
        </div>
    )
}

export default Landing;
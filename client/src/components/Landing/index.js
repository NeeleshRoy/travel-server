import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import FrontPage from './FrontPage';
import 'bulma/css/bulma.css';
import { useCookies } from 'react-cookie';

function Landing() {
    const [isLoggedIn, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [cookies, setCookie] = useCookies('at');

    if (cookies.at && cookies.role && !isLoggedIn) {
        const userDetails = { role: cookies.role, token: cookies.at }
        setUser(userDetails)
        setLogin(true);
    }

    function initiateLogin(user) {
        const { token, role } = user;
        setUser(user);
        setCookie('at', token, { maxAge: 10800 });
        setCookie('role', role, { maxAge: 10800 });
        setLogin(true);
    }

    return (
        <div>
            {isLoggedIn ?
                <Dashboard user={user} /> :
                <FrontPage initiateLogin={initiateLogin} />}
        </div>
    )
}

export default Landing;
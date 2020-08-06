import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import FrontPage from './FrontPage';
import 'bulma/css/bulma.css';
import { useCookies } from 'react-cookie';

function Landing() {
    const [isLoggedIn, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [cookies, setCookie] = useCookies('at');

    useEffect(() => {
        if (cookies.at && cookies.role) {
            const { at, role } = cookies;

            setUser({ token: at, role });
            setLogin(true);
        }
    }, [user])

    function initiateLogin(user) {
        const { token, role } = user;
        setUser({ token, role });
        setCookie('at', token, { maxAge: 10800 });
        setCookie('role', role, { maxAge: 10800 });
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
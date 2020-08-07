import React, { useState, useEffect } from 'react'
import { getUserDetails } from '../../../translate';
import Header from './Header';
import ConsultantView from './ConsultantView';

const Consultant = (props) => {
    const [consultant, setConsultant] = useState({});

    useEffect(() => {
        const user = getUserDetails(props);
        user.then(consultant => {
            setConsultant(consultant);
        });
    }, [props])

    return (
        <div className="consultant">
            <Header />
            <div className="container">
                {
                    consultant ?
                        <ConsultantView consultant={consultant} token={props.token} /> : <div>Loading..</div>
                }
            </div>
        </div>
    )
}

export default Consultant

import React, { useState, useEffect } from 'react'

import { getUserDetails } from '../../translate';

const Consultant = (props) => {
    const [consultant, setConsultant] = useState({});

    useEffect(() => {
        const user = getUserDetails(props);
        user.then(consultant => {
            setConsultant(consultant);
        });
    }, [props])

    return (
        <div>
            <p>{consultant.firstname}</p>
            <p>{consultant.lastname}</p>
        </div>
    )
}

export default Consultant

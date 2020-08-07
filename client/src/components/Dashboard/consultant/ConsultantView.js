import React, { useEffect, useState } from 'react'
import { getConsultantPlans } from '../../../translate';

import Plans from './Plans';

function ConsultantView(props) {
    const { consultant, token } = props;
    const [plans, setPlans] = useState(false);

    useEffect(() => {
        let mounted = true;
        getConsultantPlans(token).then((plans) => {
            if (mounted && plans && plans.length > 0) {
                setPlans(plans)
            }
        })
        return () => {
            mounted = false
        }
    }, [token])

    return (
        <>
            <div className="c-welcome">
                Welcome {consultant.firstname}
            </div>
            <div className="c-plans">
                <h3 className="is-size-1">Your plans</h3>
                <div className="columns">
                    {
                        plans ? <Plans plans={plans} /> : <div>Loading..</div>
                    }
                </div>
            </div>
        </>
    )
}

export default ConsultantView

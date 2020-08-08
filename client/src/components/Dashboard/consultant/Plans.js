import React from 'react'
import { Link } from 'react-router-dom';

function Plans(props) {
    return (
        props.plans.map(plan => {
            return (
                <div className="column is-one-fifth" key={plan._id}>
                    <div className="c-plan">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title is-4">{plan.name}</p>
                                <p className="subtitle is-6">Price : &#8377; {plan.price}</p>
                                <div className="content">
                                    {plan.overview}
                                </div>
                                <Link
                                    to={`/consultant/plan/edit/${plan._id}`}
                                    className="button is-link">
                                    Edit
                                </Link>
                                <button className="button is-danger ml-2"> Delete </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Plans

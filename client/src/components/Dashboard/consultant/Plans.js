import React from 'react'

function Plans(props) {
    return (
        props.plans.map(plan => {
            return (
                <div className="column is-one-quarter">
                    <div className="c-plan" key={plan._id}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p class="title is-4">{plan.name}</p>
                                <p class="subtitle is-6">Price : &#8377; {plan.price}</p>
                                <div className="content">
                                    {plan.overview}
                                </div>
                                <button className="button is-link"> Edit </button>
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

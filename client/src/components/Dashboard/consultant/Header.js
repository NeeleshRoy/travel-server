import React from 'react'

function Header() {
    return (
        <header>
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <h1 className="is-size-3 ml-5">Travel</h1>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button className="button is-primary mr-5">
                                    <strong>Edit Profile</strong>
                                </button>

                                <button className="button is-warning mr-5">
                                    <strong>Add Plan</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

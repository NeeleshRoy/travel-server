import React, { Component } from 'react'
import { checkLogin } from '../../translate';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isValid: false
        }

        this.validateInput = this.validateInput.bind(this);
        this.login = this.login.bind(this);
    }

    async login(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value

        if (!email) {
            this.setState({ email: "Email Should not be empty" })
            return false;
        }

        if (!password) {
            this.setState({ password: "Password Should not be empty" })
            return false;
        }

        const user = await checkLogin({ email, password });
        if (user) {
            this.props.initiateLogin(user);
        } else {
            throw Error('Internal Systems problem');
        }
    }

    validateInput(event) {
        const value = event.target.value;
        if (!value) return false;
        if (event.target.name === 'email') {
            // eslint-disable-next-line
            const test = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)

            if (!test) {
                this.setState({ email: "Invalid Email" })
            } else {
                this.setState({ email: '' })
            }
        }

        if (event.target.name === 'password') {
            const test = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)

            if (!test) {
                this.setState({ password: "Minimum eight characters, at least one letter, one number and one special character" })
            } else {
                this.setState({ password: '' })
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.login} className="mt-3">
                <div className="field">
                    <div className="control">
                        <input onChange={this.validateInput} name="email" className={this.state.email ? 'input is-danger' : 'input isPrimary'} type="text" placeholder="Email Address" />
                        {this.state.email ? <p className="help is-danger">{this.state.email}</p> : ""}
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input onChange={this.validateInput} name="password" className={this.state.password ? 'input is-danger' : 'input isPrimary'} type="password" placeholder="Password" />
                        {this.state.password ? <p className="help is-danger">{this.state.password}</p> : ""}
                    </div>
                </div>

                <button
                    type="submit"
                    className="button is-primary"
                    {...this.state.isValid ? "disabled" : ""}>
                    Sign in
                    </button>
            </form>
        )
    }
}

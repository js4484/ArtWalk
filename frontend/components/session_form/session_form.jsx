import { merge } from 'lodash';
import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li className="error" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="greeting-with-img">
                        <div className="lgs">Welcome</div>
                        <div className="after-lgs">Create an account.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className="input-box ib">
                            <label htmlFor="input-email"><div className="input-text">Email:</div></label>
                            <input id="input-email" type="text" value={this.state.email} className="login-input" onChange={this.update("email")} />
                        </div>
                        <div className="signup-names">
                            <div className="input-names">
                                <label htmlFor="input-first-name"><div className="input-text">First Name:</div></label>
                                <input id="input-first-name" type="text" value={this.state.first_name} className="login-input" onChange={this.update("first_name")} />
                            </div>
                            <div className="input-names">
                                <label htmlFor="input-last-name"><div className="input-text">Last Name:</div></label>
                                <input id="input-last-name" type="text" value={this.state.last_name} className="login-input" onChange={this.update("last_name")} />
                            </div>
                        </div>

                        <div className="input-box ib">
                            <label htmlFor="input-password"><div className="input-text">Password:</div></label>
                            <input id="input-password" type="password" value={this.state.password} className="login-input" onChange={this.update("password")} />
                        </div>
                        <input className="session-submit" type="submit" value="Sign Up" />
                        <div className="password-strength">
                            <p className="after-lgs">Your password must be at least 6 characters</p>
                        </div>
                        <a className="fp" href="/#/login">Log In Instead</a>
                    </div>
                </form>
            </div>
        )
    };
}

export default SessionForm;

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
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
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
                            <label htmlFor="input-email"><span className="input-text">Email:</span></label>
                            <input id="input-email" type="text" value={this.state.email} className="login-input" onChange={this.update("email")} />
                        </div>
                        <div className="signup-names">
                            <div className="input-names">
                                <label htmlFor="input-first-name"><span className="input-text">First Name:</span></label>
                                <input id="input-first-name" type="text" value={this.state.first_name} className="login-input" onChange={this.update("first_name")} />
                            </div>
                            <div className="input-names">
                                <label htmlFor="input-last-name"><span className="input-text">Last Name:</span></label>
                                <input id="input-last-name" type="text" value={this.state.last_name} className="login-input" onChange={this.update("last_name")} />
                            </div>
                        </div>

                        <div className="input-box ib">
                            <label htmlFor="input-password"><span className="input-text">Password:</span></label>
                            <input id="input-password" type="password" value={this.state.password} className="login-input" onChange={this.update("password")} />
                        </div>
                        <input className="session-submit" type="submit" value="Sign Up" />
                        <div className="password-strength">
                            <p className="after-lgs">Your password must be at least 6 characters</p>
                        </div>
                        <a className="fp" href="#">Log In Instead</a>
                    </div>
                </form>
            </div>
        )
    };
}

export default SessionForm;

import { merge } from 'lodash';
import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {email: '',
            password: '',
            first_name: '',
            last_name: ''},
            activeForm: 'greetingForm'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    updateUser(field) {
        return e => this.setState(
            merge({}, this.state, { user: { [field]: e.target.value } })
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.activeForm === "greetingForm") {
            // logic for login/signup; if email exists aF is login; else signup
            this.setState({ activeForm: "##" })
        } else {
            const user = Object.assign({}, this.state);
            this.props.processForm(user);
        }
    }

    checkEmail(e) {
        console.log("method that checks to confirm email is the one in state")
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
        const greetingForm = (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="greeting-with-img">
                        <div>Let's get Started</div>
                        <div>Use Facebook or email to get started.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text" value={this.state.user.email} onChange={this.updateUser('email')} className="login-input" />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value="Get Started" />
                        <p>or</p>
                        <input className="session-submit" type="submit" value="Continue With Facebook" />
                        <p className="disclaimer">By continuing, I accept the Eventbrite terms of service, community guidelines and have read the privacy policy.</p>
                    </div>
                </form>
            </div>

        );


        const loginForm = (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="greeting-with-img">
                        <div>Welcome back</div>
                        <div>Please enter your password to log in.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text" value={this.state.user.email} className="login-input" readonly />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" value={this.state.user.password} onChange={this.updateUser('password')} className="login-input"/>
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value="Log In" />
                        <a href="#">Forgot password</a>
                    </div>
                </form>
            </div>
        );

        const signupForm = (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="greeting-with-img">
                        <div>Welcome</div>
                        <div>Create an account.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text" value={this.state.user.email} className="login-input" readonly />
                        </label>
                        <br />
                        <label>Confirm email:
                            <input type="text" value={this.state.user.password} onChange={this.checkEmail} className="login-input" />
                        </label>
                        <br />
                        <div className="signup-names">
                            <label>First Name:
                            <input type="text" value={this.state.user.first_name} onChange={this.updateUser('first_name')} className="login-input" />
                            </label>
                            <label>Last Name:
                            <input type="text" value={this.state.user.last_name} onChange={this.updateUser('last_name')} className="login-input" />
                            </label>
                        </div>
                        <br />
                        <label>Password:
                            <input type="password" value={this.state.user.password} onChange={this.updateUser('password')} className="login-input" />
                        </label>
                        <input className="session-submit" type="submit" value="Sign Up" />
                        <div className="password-strength">
                            <p>Your password must be at least 8 characters</p>
                        </div>
                        <a href="#">Log In Instead</a>
                    </div>
                </form>
            </div>
        )
        let outputForm
        switch (this.state.activeForm) {
            case "greetingForm":
                outputForm = greetingForm;
                break
            case "loginForm":
                outputForm = loginForm;
                break
            case "signupForm":
                outputForm = signupForm;
                break
        }
        return (
        <div>
            {outputForm}
        </div>
        )
    };
}

export default SessionForm;

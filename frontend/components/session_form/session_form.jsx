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
        this.checkEmail = this.checkEmail.bind(this);
    }

    checkEmail(e) {
        // debugger;
        console.log(e.target.value === this.state.email)
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
                        <div>Welcome</div>
                        <div>Create an account.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text" value="" className="login-input" onChange={this.update('email')}/>
                        </label>
                        <br />
                        <div className="signup-names">
                            <label>First Name:
                            <input type="text" value="" onChange={this.update('first_name')} className="login-input" />
                            </label>
                            <label>Last Name:
                            <input type="text" value="" onChange={this.update('last_name')} className="login-input" />
                            </label>
                        </div>
                        <br />
                        <label>Password:
                            <input type="password" value="" onChange={this.update('password')} className="login-input" />
                        </label>
                        <input className="session-submit" type="submit" value="Sign Up" />
                        <div className="password-strength">
                            <p>Your password must be at least 6 characters</p>
                        </div>
                        <a href="#">Log In Instead</a>
                    </div>
                </form>
            </div>
        )
    };
}

export default SessionForm;

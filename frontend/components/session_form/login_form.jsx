import { merge } from 'lodash';
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
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
                        <div>Let's get Started</div>
                        <div>Use your email, or our demo user, to log in.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text" value={this.state.email} className="login-input" onChange={this.update("email")} />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value="Log In" />
                        <a href="#">Forgot password</a>
                    </div>
                </form>
            </div>
        );
    };
}

export default LoginForm;

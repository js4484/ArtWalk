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
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleDemoUser(e) {
        // debugger;
        e.preventDefault();
        const user = {email: "demo@user.com", password: "DemoUser"};
        this.props.processForm(user);
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
                        <div className="lgs">Let's get Started</div>
                        <div className="after-lgs">Use your email, or our demo user, to log in.</div>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className="input-box ib">
                            <label htmlFor="input-email"><span className="input-text">Email:</span></label>
                            <input id="input-email" type="text" value={this.state.email} className="login-input" onChange={this.update("email")} />
                        </div>
                        <div className="input-box ib">
                            <label htmlFor="input-password"><span className="input-text">Password:</span></label>
                            <input id="input-password" type="password" value={this.state.password} className="login-input" onChange={this.update("password")} />
                        </div>

                        <input className="session-submit" type="submit" value="Log In" />
                        <a className="fp" href="#">Forgot password</a>
                        <p className="or" >or</p>
                        <input className="demo-submit" type="submit" value="Log In As Demo User" onClick={this.handleDemoUser}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default LoginForm;

import { merge } from 'lodash';
import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        };

    }

    render() {


        return(
            <div className="ticket-form-container">
                <form>
                        <input type="text" name="firstname" value="Mickey" />
                        <input type="text" name="lastname" value="Mouse" />
                        <input type="submit" value="Submit" />
                </form>
            </div>)
    }
    
    
}
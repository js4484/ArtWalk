import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import EventShowContainer from './events/event_show_container';
import EventsIndexContainer from './events/events_index_container';
// import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

    return (<div><div className="nav-header-container">
        <header className="nav-header">
            <Link to="/events" className="header-link">
                <span className="corner-logo">ArtWalk</span>
            </Link>
            <GreetingContainer />
        </header>
    </div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <AuthRoute exact path="/events/index" component={EventsIndexContainer} /> */}
            <Route exact path="/events/:eventId" component={EventShowContainer} />
            <Route exact path="/events" component={EventsIndexContainer} />
            <Route exact path="/" component={EventsIndexContainer} />
        </Switch>
    </div>
    )
};


export default App;

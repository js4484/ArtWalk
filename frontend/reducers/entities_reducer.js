import { combineReducers } from 'redux';

import users from './users_reducer';
import events from './events_reducer';
// import tickets from './tickets_reducer';

export default combineReducers({
    users,
    events
});

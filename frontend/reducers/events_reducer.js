import { RECEIVE_CURRENT_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';


const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_EVENT:
            return Object.assign({}, state, { [action.currentEvent.id]: action.currentEvent });
        case RECEIVE_EVENTS:
            return action.events;
        default:
            return state;
    }
};

export default eventsReducer;

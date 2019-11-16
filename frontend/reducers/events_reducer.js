import { RECEIVE_CURRENT_EVENT } from '../actions/session_actions';


const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_EVENT:
            return Object.assign({}, state, { [action.currentEvent.id]: action.currentEvent });
        default:
            return state;
    }
};

export default eventsReducer;

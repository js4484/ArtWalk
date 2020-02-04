import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { DELETE_TICKET } from '../actions/ticket_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            console.log(action.payload);
            let user = action.payload;
            return Object.assign({}, state, { [user.id]: action.payload });
        case DELETE_TICKET:
            let user2 = action.ticket;
            return Object.assign({}, state, { [user2.id]: action.ticket });
        default:
            return state;
    }
};

export default usersReducer;

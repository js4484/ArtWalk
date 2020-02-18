import { CREATE_TICKET, DELETE_TICKET, RECEIVE_TICKETS } from '../actions/ticket_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const ticketsReducer = (state = [], action) => {
    Object.freeze(state);
    console.log(action);
    switch (action.type) {

        case RECEIVE_TICKETS:
            // debugger;
            let tState = Object.assign({}, state);
            action.tickets.forEach(ticket => {   tState[ticket.id] = ticket  })

            
            return tState;
        case CREATE_TICKET:
            return action.ticket;
        case DELETE_TICKET:
            let newState = Object.assign({}, state);
            debugger;
            let num = parseInt(action.id);
            delete newState[num];
            return newState;
        case LOGOUT_CURRENT_USER:
            return Object.assign({});
        default:
            return state;
    }
};

export default ticketsReducer;

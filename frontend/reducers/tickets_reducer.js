import { CREATE_TICKET, DELETE_TICKET } from '../actions/ticket_actions';


const ticketsReducer = (state = [], action) => {
    console.log(action);
    Object.freeze(state);
    switch (action.type) {
        case CREATE_TICKET:
            return action.ticket;
        case DELETE_TICKET:
            let newState = Object.assign({}, state);
            console.log(action);
            delete newState[action.ticket.ticket.id];
            return newState;
        default:
            return state;
    }
};

export default ticketsReducer;

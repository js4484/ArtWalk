import { CREATE_TICKET, DELETE_TICKET } from '../actions/ticket_actions';


const ticketsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case CREATE_TICKET:
            return action.ticket;
        case DELETE_TICKET:
            newState = Object.assign({}, state);
            delete newState[action.payload.ticket.id]
            return newState;
        default:
            return state;
    }
};

export default ticketsReducer;

import { CREATE_TICKET } from '../actions/ticket_actions';


const ticketsReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger;
    switch (action.type) {
        case CREATE_TICKET:
            return action.ticket;
        default:
            return state;
    }
};

export default ticketsReducer;

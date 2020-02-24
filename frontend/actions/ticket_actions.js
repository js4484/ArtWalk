import * as APIUtil from '../util/tickets_api_util';

const receiveTicket = ticket => ({
    type: CREATE_TICKET,
    ticket
})

export const CREATE_TICKET = 'CREATE_TICKET';


export const createTicket = (eventId, currentUserId, qty) => dispatch => {

    APIUtil.createTicket(eventId, currentUserId, qty).then(ticket => {
         dispatch(receiveTicket(ticket))
    })
};

export const DELETE_TICKET = 'DELETE_TICKET';

export const deleteTicket = (id) => dispatch => (
    APIUtil.deleteTicket(id).then(() => dispatch(removeTicket(id)))
);

export const removeTicket = id => (
    
    {
        type: DELETE_TICKET,
        id
    }
);

export const RECEIVE_TICKETS = "RECEIVE_TICKETS";

const receiveTickets = tickets => {
    return {
        type: RECEIVE_TICKETS,
        tickets
    };
};



export const fetchTickets = () => dispatch => {
    return APIUtil.fetchTickets()
        .then(tickets => dispatch(receiveTickets(tickets)));
};
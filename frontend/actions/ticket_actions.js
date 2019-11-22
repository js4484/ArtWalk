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

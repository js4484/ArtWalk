export const createTicket = (eventId, userId, qty) => (
    $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/tickets`,
        data: {userId: userId, qty: qty}
    })
);

export const deleteTicket = (ticketId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tickets/${ticketId}`
    })
);

export const fetchTickets = () => (
    $.ajax({
        method: 'GET',
        url: `api/tickets`
    })
);

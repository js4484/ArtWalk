export const createTicket = (eventId, userId, qty) => (
    $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/tickets`,
        data: {userId: userId, qty: qty}
    })
);

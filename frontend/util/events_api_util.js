export const fetchEvent = id => (
    $.ajax({
        method: 'GET',
        url: `api/events/${id}`
    })
);
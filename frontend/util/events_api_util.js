export const fetchEvent = id => (
    $.ajax({
        method: 'GET',
        url: `api/events/${id}`
    })
);

export const fetchEvents = () => (
    $.ajax({
        method: 'GET',
        url: `api/events`
    })
);
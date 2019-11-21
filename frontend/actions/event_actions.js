import * as APIUtil from '../util/events_api_util';


const receiveCurrentEvent = currentEvent => ({
    type: RECEIVE_CURRENT_EVENT,
    currentEvent
});

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
});


export const RECEIVE_CURRENT_EVENT = 'RECEIVE_CURRENT_EVENT';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export const fetchEvent = eventId => dispatch => (
    APIUtil.fetchEvent(eventId).then(event => (
        dispatch(receiveCurrentEvent(event))
    ))
);

export const fetchEvents = () => dispatch => (
    APIUtil.fetchEvents().then(events => (
        dispatch(receiveEvents(events))
    ))
);
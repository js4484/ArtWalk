import * as APIUtil from '../util/session_api_util';


const receiveCurrentEvent = currentEvent => ({
    type: RECEIVE_CURRENT_EVENT,
    currentEvent
});


export const RECEIVE_CURRENT_EVENT = 'RECEIVE_CURRENT_EVENT';

export const fetchEvent = eventId => dispatch => (
    APIUtil.fetchEvent(eventId).then(event => (
        dispatch(receiveCurrentEvent(event))
    ))
);
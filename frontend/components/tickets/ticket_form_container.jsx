import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchEvent } from '../../actions/event_actions';

import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentEvent: state.entities.events[ownProps.match.params.eventId]

    };
};

const mapDispatchToProps = dispatch => ({
    createTicket: (eventId, currentUserId, qty) => dispatch(createTicket(eventId, currentUserId, qty)),

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow));

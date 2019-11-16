import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';

import EventShow from './event_show';

const mapStateToProps = ({ session, entities: { users, events } }, ownProps) => {
    // debugger;
    return {
        currentUser: users[session.id],
        pathname: ownProps.location.pathname,
        currentEvent: events[ownProps.match.params.eventId]

    };
};

const mapDispatchToProps = dispatch => ({
    fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow));

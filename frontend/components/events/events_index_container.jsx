import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvents } from '../../actions/event_actions';

import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        events: state.entities.events

    };
};

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
});


export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
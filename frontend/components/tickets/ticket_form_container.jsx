import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { fetchEvent } from '../../actions/event_actions';

import { createTicket } from '../../actions/ticket_actions'

import TicketForm from './ticket_form';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentEventId: ownProps.eventId,
        success: state.ui.tickets

    };
};

const mapDispatchToProps = dispatch => ({
    createTicket: (eventId, currentUserId, qty) => dispatch(createTicket(eventId, currentUserId, qty)),

});


export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);

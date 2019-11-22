import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TicketFormContainer from '../tickets/ticket_form_container';

function Modal({ closeModal, eventId }) {

    let component = <TicketFormContainer eventId={eventId} />;
    // let component = <div>TicketForm</div>
    // pass close modal into ticket

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

// const mapStateToProps = state => {
//     return {

//     };
// };

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default Modal;


// connect(null, mdp)(Modal)
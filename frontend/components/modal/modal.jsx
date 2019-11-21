import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({ closeModal }) {

    // let component = <TicketFormContainer />;
    let component = <div>TicketForm</div>

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
        createTicket

    };
};

export default Modal;


// connect(null, mdp)(Modal)
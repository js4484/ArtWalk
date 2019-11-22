import { merge } from 'lodash';
import React from 'react';

class TicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        };

        this.processSubtractTicket = this.processSubtractTicket.bind(this);
        this.processAddTicket = this.processAddTicket.bind(this);
        this.processTicketNumber = this.processTicketNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSuccess = this.renderSuccess.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let qty = this.state.qty;
        this.props.createTicket(this.props.currentEventId, this.props.currentUserId, qty);


    }

    processAddTicket() {
        let qty = this.state.qty + 1;
        this.setState({ qty: qty });
    }

    processSubtractTicket() {
        if (this.state.qty === 0) return ;
        let qty = this.state.qty - 1;
        this.setState({qty: qty});

    }

    processTicketNumber() {
        return `${this.state.qty}`
    }

    renderSuccess() {
        return (
            <div className="ticket-success">
                {this.props.success.map((success, i) => (
                    <div className="success" key={`success-${i}`}>
                        {success}
                    </div>
                ))}
            </div>
        );
    }

    render() {

        if (!this.props.currentUserId) {
            return (<div className="ticket-form-container">
                <div>Please Sign in to Reserve Tickets</div>
            </div>)
        }

        if (this.props.success.length > 0) {
            return(
                <div className="ticket-form-container to-flex-column">
                    {this.renderSuccess()}
                </div>
            )
        }

        return(<div className="ticket-form-container">

            <div className="ticket-button" onClick={this.processSubtractTicket}><div className="ticket-button-text">-</div></div>
            <div className="ticket-button"><div className="ticket-button-text">{this.processTicketNumber()}</div></div>
                <div className="ticket-button" onClick={this.processAddTicket}><div className="ticket-button-text">+</div></div>
            <form onSubmit={this.handleSubmit}>
                <input className="ticket-form-btn" type="submit" value="Submit" />
            </form>
            </div>)
    }
    
    
}

export default TicketForm;
import React from 'react';
import Modal from '../modal/modal.jsx';
import { Route, NavLink, Redirect, Link, Switch } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, modalOpen: false };
    this.currentUser = this.props.currentUser;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.displayTickets = this.displayTickets.bind(this);
    this.deleteTicket = this.deleteTicket.bind(this);
  };


  componentDidMount() {
    

    this.props.fetchUser(this.props.match.params.userId).then(() => {
      console.log(this.props.currentUser);
      this.setState({ loading: false });
    });

  }

  deleteTicket(e) {
    console.log(e.target.id);
    console.log(parseInt(e.target.id));  
    let save = e.target;
    
    let eventId = parseInt(save.id);   
    console.log(this.currentUser.tickets[0].event_id);
    
    e.preventDefault();
    
    let ticketIDs = [];
    this.currentUser.tickets.forEach((uT) => {
      // console.log(uT);
      if (uT.event_id === eventId) {
        // console.log(uT);
        console.log("match");
        ticketIDs.push(uT.id);
        
      }
    });
    // return eventId;
    this.props.deleteTicket(ticketIDs[0]).then(this.props.history.push(`/events`));
  }

  displayTickets() {
    // console.log(this.props.currentUser);
    let output = [];
    this.props.currentUser.attending_events.forEach((object, index) => {
      // console.log(object);
      output.push(<div key={index} className="ticket-con">
        <div className="ticket-image" style={{ backgroundImage: `url(${object.event_image})` }}
          onClick={() => this.props.history.push(`/events/${object.id}`)}></div>
        <div className="ticket-douple">
          <div className="ticket-name">
            {object.event_title}
          </div>
          <div className="ticket-date">
            {object.event_date}
          </div>
          <div className="start-time">
            {object.start_time} EST
          </div>
        </div>
        <i id={object.id} onClick={this.deleteTicket} className="far fa-trash-alt ticket-delete-button"></i>
      </div>)
    });
    return output;
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {

    this.setState({ modalOpen: false });
  }


  render() {
    console.log(this.currentUser);

    if (this.state.loading) return (<div>Loading</div>);

    // let modal;
    // if (this.state.modalOpen) {
    //   modal = <Modal eventId={this.props.match.params.eventId} closeModal={this.closeModal} />;
    // }
    
    return (
    <div className="show-page user-show-container">
      {this.displayTickets()}
    </div>
    )
  }

}

export default UserShow;
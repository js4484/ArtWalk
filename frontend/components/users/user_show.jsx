import React from 'react';

import { Route, NavLink, Redirect, Link, Switch } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, modalOpen: false, tickets: []};
    this.currentUser = this.props.currentUser;

   
    this.displayTickets2 = this.displayTickets2.bind(this);
    this.deleteTicket2 = this.deleteTicket2.bind(this);
  };


  componentDidMount() {
    

    this.props.fetchTickets().then((tickets) => {
      console.log(tickets);
      // this.setState({ loading: false });
      this.setState({ loading: false, tickets: tickets.tickets })
    });
    // this.setState({ loading: false, tickets: this.props.tickets})

  }

  // componentDidUpdate() {
  //   this.setState({ tickets: this.props.tickets })
  // }
  

  deleteTicket2(e) {
    
    this.props.deleteTicket(e.target.id);
  }


  displayTickets2() {
    // console.log(this.props.currentUser);
    let output = [];
    this.state.tickets.forEach((ticket, index) => {
      // console.log(object);
      output.push(<div key={ticket.id} className="ticket-con">
        <div className="ticket-image" 
          onClick={() => this.props.history.push(`/events/${ticket.event_id}`)}> ticket image</div>
        <div className="ticket-douple">
          <div className="ticket-name">
            {ticket.id}
          </div>
          <div className="ticket-date">
            {ticket.event_id}
          </div>
          <div className="start-time">
            {ticket.event_id} EST
          </div>
        </div>
        <i id={ticket.id} onClick={this.deleteTicket2} className="far fa-trash-alt ticket-delete-button"></i>
      </div>)
    });
    return output;
  };



  render() {
    console.log(this.currentUser);

    if (this.state.loading) return (<div>Loading</div>);


    
    return (
    <div className="show-page user-show-container">
      {/* {this.displayTickets()} */}
        {this.displayTickets2()}
    </div>
    )
  }

}

export default UserShow;
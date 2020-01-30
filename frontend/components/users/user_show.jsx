import React from 'react';
import Modal from '../modal/modal.jsx';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, modalOpen: false };
    this.currentUser = this.props.currentUser;
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.displayTickets = this.displayTickets.bind(this)
  };


  componentDidMount() {

    this.props.fetchUser(this.props.match.params.userId).then(() => {
      this.setState({ loading: false });
    });
  }

  displayTickets() {
    console.log(this.props.currentUser);
    let output = [];
    this.props.currentUser.attending_events.forEach((object, index) => {
      output.push(<div key={index} className="ticket-con">
        <div className="ticket-image" style={{ backgroundImage: `url(${object.event_image})` }}></div>
        <div className="ticket-douple">
          <div className="ticket-name">
            {object.event_title}
          </div>
          <div className="ticket-date">
            {object.event_date}
          </div>
          <div className="start-time">
            {object.start_time}
          </div>
        </div>
        <i className="far fa-trash-alt"></i>
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

    if (this.state.loading) return (<div>Loading</div>);

    // let modal;
    // if (this.state.modalOpen) {
    //   modal = <Modal eventId={this.props.match.params.eventId} closeModal={this.closeModal} />;
    // }
    
    return (
    <div className="show-page user-show-container">
      User Show Page
      Tickets:
      {this.displayTickets()}
    </div>
    )
  }

}

export default UserShow;
import React from 'react';
import Modal from '../modal/modal.jsx';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  };


  componentDidMount() {

    this.props.fetchUser(this.props.match.params.userId).then(() => {
      this.setState({ loading: false });
    });
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
    </div>
    )
  }

}

export default UserShow;
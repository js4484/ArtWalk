import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],


  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
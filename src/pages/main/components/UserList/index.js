import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../../../store/ducks/users';

import { Container, User } from './styles';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          login: PropTypes.string,
          avatar_url: PropTypes.string,
          coords: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
          }),
        }),
      ),
    }).isRequired,
    removeUser: PropTypes.func.isRequired,
  };

  handleDelete = (e, id) => {
    e.preventDefault();

    const { removeUser } = this.props;

    removeUser(id);
  };

  render() {
    const { users } = this.props;

    return (
      <Container>
        {users.data.map(user => (
          <User key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div className="detail">
              <strong>{user.name}</strong>
              <small>{user.login}</small>
            </div>
            <a href="#" onClick={e => this.handleDelete(e, user.id)} title="Remover">
              <i className="fa fa-times-circle" />
            </a>
            <i className="fa fa-angle-right" />
          </User>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);

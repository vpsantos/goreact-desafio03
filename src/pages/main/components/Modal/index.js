import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../../../store/ducks/users';

import { Container } from './styles';

class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    coords: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    close: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    userInput: '',
  };

  handleAddUser = (e) => {
    e.preventDefault();

    const { userInput } = this.state;
    const { addUserRequest, coords, close } = this.props;

    addUserRequest({ user: userInput, coords });

    this.setState({ userInput: '' });

    close();
  };

  handleCancel = (e) => {
    e.preventDefault();

    const { close } = this.props;

    close();
  };

  render() {
    const { userInput } = this.state;
    const { visible } = this.props;

    return (
      <Container visible={visible}>
        <div className="modal__content">
          <h2>Adicionar novo usuário</h2>

          <form onSubmit={this.handleAddUser}>
            <input
              type="text"
              value={userInput}
              onChange={e => this.setState({ userInput: e.target.value })}
              placeholder="Usuário no Github"
            />
            <div className="buttons__container">
              <button className="button button__cancel" type="button" onClick={this.handleCancel}>
                Cancelar
              </button>
              <button className="button button__save" type="submit">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Modal);

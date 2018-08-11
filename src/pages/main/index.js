import React, { Fragment, Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import { connect } from 'react-redux';

import UserList from './components/UserList';
import Modal from './components/Modal';

import { Box, MarkerImage } from './styles';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-toastify/dist/ReactToastify.min.css';

class Main extends Component {
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
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -27.2177659,
      longitude: -49.6451598,
      zoom: 14,
    },
    modalVisible: false,
    coords: {
      latitude: null,
      longitude: null,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    this.setState({
      modalVisible: true,
      coords: {
        latitude,
        longitude,
      },
    });
  };

  render() {
    const { viewport, modalVisible, coords } = this.state;
    const { users } = this.props;

    return (
      <Fragment>
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoidmluaWNpdXNzYW50b3MiLCJhIjoiY2prbmRnbnBxMG5yejNrcXI5MTJraGdtMSJ9.7SVafmNaewKfa0tUzuKspg"
          onViewportChange={newViewport => this.setState({ viewport: newViewport })}
        >
          {users.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.coords.latitude}
              longitude={user.coords.longitude}
              onClick={this.handleMapClick}
              captureClick
            >
              <MarkerImage src={user.avatar_url} alt="" />
            </Marker>
          ))}
        </MapGL>

        <Box>
          <div className="box__content">
            {users.loading && <i className="fa fa-spinner fa-pulse" />}

            {users.data.length ? (
              <UserList />
            ) : (
              <span>Clique no mapa para adicionar usuários.</span>
            )}
          </div>
        </Box>

        <Modal
          visible={modalVisible}
          coords={coords}
          close={() => {
            this.setState({ modalVisible: false });
          }}
        />
        <ToastContainer autoClose={4000} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Main);

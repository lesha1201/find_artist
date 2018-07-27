import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';

import './Artist.scss';

import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';
import ArtistBlock from '../../components/ArtistBlock';
import { fetchArtist } from '../../modules/artists/actions';
import Loader from '../../components/Loader';

console.log(throttle);

class Artist extends React.Component {
  state = {
    artist: {},
    loading: true,
    error: '',
    isMobile: window.innerWidth < 590,
  };

  onResize() {
    return throttle(() => {
      this.setState({ isMobile: window.innerWidth < 590 });
    }, 200);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize());
    const { name } = this.props.match.params;
    this.fetchArtist(name);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props.match.params;
    const { name: prevName } = prevProps.match.params;
    if (prevName !== name) {
      this.fetchArtist(name);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize());
  }

  render() {
    const { artist, loading, error, isMobile } = this.state;
    return (
      <div className="artist-page">
        <Container>
          <SearchForm isMobile={isMobile} />
          {loading ? (
            <div className="centered-box">
              <Loader />
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <ArtistBlock artist={artist} />
          )}
        </Container>
      </div>
    );
  }

  fetchArtist(name) {
    this.setState({ loading: true }, () => {
      this.props
        .fetchArtistAction(name)
        .then(artist => this.setState({ artist, loading: false, error: '' }))
        .catch(() => this.setState({ error: 'Not found', loading: false }));
    });
  }
}

Artist.propTypes = {
  fetchArtistAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default connect(
  null,
  { fetchArtistAction: fetchArtist },
)(withRouter(Artist));

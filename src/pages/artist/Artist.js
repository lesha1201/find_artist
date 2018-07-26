import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Artist.scss';

import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';
import ArtistBlock from '../../components/ArtistBlock';
import { fetchArtist } from '../../modules/artists/actions';

class Artist extends React.Component {
  state = {
    artist: {},
    loading: true,
    error: '',
  };

  componentDidMount() {
    const { name } = this.props.match.params;
    this.fetchArtist(name);
  }

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.props.match.params;
    const { name: prevName } = prevProps.match.params;
    if (prevName !== name) {
      this.fetchArtist(name);
    }
  }

  render() {
    const { artist, loading, error } = this.state;
    console.log(this.state);
    return (
      <div className="artist-page">
        <Container>
          <SearchForm />
          {loading ? (
            <div>Loading...</div>
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
    this.props
      .fetchArtistAction(name)
      .then(artist => this.setState({ artist, loading: false, error: '' }))
      .catch(() => this.setState({ error: 'Not found', loading: false }));
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

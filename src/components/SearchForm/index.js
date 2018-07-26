import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';
import { fetchArtist } from '../../modules/artists/actions';

class SearchForm extends Component {
  state = {
    artistName: '',
  };

  render() {
    const { artistName } = this.state;
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          className="search-form__search-field"
          type="text"
          name="artistName"
          id="artist-search-field"
          placeholder="Artist name..."
          value={artistName}
          onChange={this.onChange}
        />
        <button className="btn btn--gradient" type="submit">
          Search
        </button>
      </form>
    );
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let uri = encodeURI(this.state.artistName.toLowerCase());
    this.props.history.push('/artist/' + uri);
  };
}

export default withRouter(SearchForm);

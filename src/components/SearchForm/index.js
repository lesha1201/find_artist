import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './styles.scss';

class SearchForm extends Component {
  static defaultProps = {
    isMobile: false,
  };

  state = {
    artistName: '',
  };

  render() {
    const { artistName } = this.state;
    const { isMobile } = this.props;
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
          {isMobile ? 'S' : 'Search'}
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

SearchForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  isMobile: PropTypes.bool,
};

export default withRouter(SearchForm);

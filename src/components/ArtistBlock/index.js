import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ArtistBlock = ({ artist }) => {
  return (
    <div className="artist-block">
      <div className="artist-block__main">
        <img
          className="artist-block__avatar"
          src={artist.thumb_url}
          alt="Artist avatar"
        />
        <h1 className="artist-block__name">{artist.name}</h1>
        {artist.facebook_page_url && (
          <a
            href={artist.facebook_page_url}
            className="btn btn--small btn--outline-blue artist-block__facebook"
          >
            Facebook
          </a>
        )}
      </div>

      <div className="artist-block__events">
        <h2 className="artist-block__events-heading">Upcoming events</h2>
        <ul className="artist-block__events-list">
          <li className="artist-block__event">
            22.02.18 - Russia, Moscow, Encore Beach Club
          </li>
          <li className="artist-block__event">
            22.02.18 - Russia, Moscow, Encore Beach Club
          </li>
          <li className="artist-block__event">
            22.02.18 - Russia, Moscow, Encore Beach Club
          </li>
        </ul>
      </div>
    </div>
  );
};

ArtistBlock.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumb_url: PropTypes.string.isRequired,
    facebook_page_url: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
        venue: PropTypes.shape({
          name: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        }),
      }),
    ),
  }),
};

export default ArtistBlock;

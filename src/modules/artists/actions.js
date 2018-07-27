import { SAVE_ARTIST, ERROR_ARTIST } from './constants';
import { artistAPI } from '../../utils/api';

export const saveArtist = artist => ({ type: SAVE_ARTIST, artist });
export const errorArtist = err => ({ type: ERROR_ARTIST, err });

export function fetchArtist(name) {
  return async function(dispatch, getState) {
    try {
      const { artists } = getState();
      let artist = false;

      for (let i = 0; i < artists.length; i++) {
        if (artists[i].name.toLowerCase() === name.toLowerCase()) {
          artist = artists[i];
          break;
        }
      }

      if (artist) {
        return artist;
      } else {
        const artistInfo = await artistAPI.fetchArtist(name);
        const artistEvents = await artistAPI.fetchArtistEvents(name);
        const combined = { ...artistInfo, events: artistEvents };

        dispatch(saveArtist(combined));

        return combined;
      }
    } catch (e) {
      throw { message: 'Something went wrong' };
    }
  };
}

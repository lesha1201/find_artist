import { API_KEY } from '../config';

export const artistAPI = {
  fetchArtist: name => {
    return fetch(
      `https://rest.bandsintown.com/artists/${name}?app_id=${API_KEY}`,
    ).then(res => res.json());
  },
  fetchArtistEvents: name => {
    return fetch(
      `https://rest.bandsintown.com/artists/${name}/events?app_id=${API_KEY}`,
    ).then(res => res.json());
  },
};

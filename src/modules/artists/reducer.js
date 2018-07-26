import { MAX_ARTISTS, SAVE_ARTIST } from './constants';

export default function artists(state = [], action) {
  switch (action.type) {
    case SAVE_ARTIST:
      return state.every(artist => artist.id !== action.artist.id) &&
        state.length <= MAX_ARTISTS
        ? [...state, action.artist]
        : state;
    default:
      return state;
  }
}

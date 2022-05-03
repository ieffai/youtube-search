import { createSlice } from '@reduxjs/toolkit';
import { songs } from '../../utils/data';

const slice = createSlice({
  name: 'app',
  initialState: {
    initialSongs: songs,
    searchedSongs: songs,
    video: {},
  },
  reducers: {
    setSearchedSongs(state, action) {
      state.searchedSongs = action.payload;
    },
    setVideo(state, action) {
      state.video = action.payload
    },
    setSearch(state, action) {
      state.searchedSongs = state.initialSongs.filter((song) => song.name.toLowerCase().includes(action.payload))
    }
  },
});

export default slice.reducer;
export const { setSearchedSongs, setVideo, setSearch } = slice.actions;

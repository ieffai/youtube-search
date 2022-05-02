import { createSlice } from '@reduxjs/toolkit';
import { songs } from '../../utils/data';

const slice = createSlice({
  name: 'app',
  initialState: {
    initialSongs: songs,
    searchedSongs: []
  },
  reducers: {
    setSearchedSongs(state, action) {
      state.searchedSongs = action.payload;
    }
  },
});

export default slice.reducer;
export const { setSearchedSongs } = slice.actions;

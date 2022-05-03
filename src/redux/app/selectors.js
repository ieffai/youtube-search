import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state) => state.app;

export const getSongsSelector = createSelector(getAppState, (app) => app.searchedSongs);
export const getVideoSelector = createSelector(getAppState, (app) => app.video);

import { createSelector } from '@reduxjs/toolkit';

const getAppState = (state) => state.app;

export const getInitialSongsSelector = createSelector(getAppState, (app) => app.initialSongs);

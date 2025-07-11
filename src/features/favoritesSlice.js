import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.find(p => p.id === action.payload.id)) {
        state.push(action.payload);
        console.log('амвапв', action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
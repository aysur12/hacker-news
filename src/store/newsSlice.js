import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = { news: [] };

const newsSlice = createSlice({
  name: 'news',
  initialState: initialNewsState,
  reducers: {
    setUpdateNews(state, action) {
      state.news = action.payload;
    },
  },
});

export const newsActions = newsSlice.actions;



export default newsSlice.reducer;

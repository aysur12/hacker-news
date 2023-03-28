import { createSlice } from '@reduxjs/toolkit';

const initialNewsState = { news: [] };

const newsSlice = createSlice({
  name: 'news',
  initialState: initialNewsState,
  reducers: {
    setUpdateNews(state) {
      fetch(
        'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
      )
        .then((response) => response.json())
        .then((data) => (state.news = data.slice(0, 100)));
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;

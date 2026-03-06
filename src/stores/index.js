import { configureStore } from '@reduxjs/toolkit';
import { surveySlice } from './survey/surveySlice';
import thunk from './middleware/thunk.js';

export default configureStore({
  reducer: {
    survey: surveySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

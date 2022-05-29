import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    theme: themeReducer
  },

});
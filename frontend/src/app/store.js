import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import projReducer from '../features/projSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    proj: projReducer,
  },
})
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import mailReducer from '../features/counter/mailSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    mail:mailReducer,
  },
});

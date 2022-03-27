import { configureStore } from '@reduxjs/toolkit';
import UploadSlice from './slices/UploadSlice';

export const store = configureStore({
  reducer: {
    uploads: UploadSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
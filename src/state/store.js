import { configureStore } from '@reduxjs/toolkit'
import fileDirectorySlice from './fileDirectorySlice';
import contentsSlice from './contentsSlice';

export const store = configureStore({
  reducer: {
    fileDirectory: fileDirectorySlice,
    contents: contentsSlice,
  },
})
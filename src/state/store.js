import { configureStore } from '@reduxjs/toolkit'
import fileDirectorySlice from './fileDirectorySlice'

export const store = configureStore({
  reducer: {
    fileDirectory: fileDirectorySlice
  },
})
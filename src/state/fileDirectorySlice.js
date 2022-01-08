import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  location: window.localStorage.getItem('lastOpenedLocation'),
}

export const fileDirectorySlice = createSlice({
  name: 'fileDirectory',
  initialState,
  reducers: {
    loadNewLocation: (state, action) => {
      state.files = action.payload.files;
      state.location = action.payload.location;
    },
    loadFolderContents: (state, action) => {
      console.log(action.payload.location.split('\\') );
    }
  }
})

export const { loadNewLocation, loadFolderContents } = fileDirectorySlice.actions;

export default fileDirectorySlice.reducer;
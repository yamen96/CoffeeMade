import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

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
      const folderToOpen = action.payload.location.split('\\');
      const mainLocation = state.location.split('\\');
      mainLocation.every((item, index) => {
        if (item === folderToOpen[0]) {
          folderToOpen.shift();
          return true;
        }
        else return false;
      })

      let currentFolder = state;

      folderToOpen.forEach((folder) => {
        currentFolder = currentFolder?.files?.find((file) => file.name === folder);
      })

      currentFolder.isOpen = true;
      currentFolder.files = action.payload.files;
    },

    closeFolder: (state, action) => {
      const folderToOpen = action.payload.location.split('\\');
      const mainLocation = state.location.split('\\');
      mainLocation.every((item, index) => {
        if (item === folderToOpen[0]) {
          folderToOpen.shift();
          return true;
        }
        else return false;
      })

      let currentFolder = state;

      folderToOpen.forEach((folder) => {
        currentFolder = currentFolder?.files?.find((file) => file.name === folder);
      })

      currentFolder.isOpen = false;
    }
  }
})

export const { loadNewLocation, loadFolderContents, closeFolder } = fileDirectorySlice.actions;

export default fileDirectorySlice.reducer;
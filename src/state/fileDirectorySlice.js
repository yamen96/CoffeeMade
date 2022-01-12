import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  location: window.localStorage.getItem('lastOpenedLocation') || '',
}

const traversalHelper = (folderToOpen, mainLocation, currentFolder) => {
  mainLocation.every((item, index) => {
    if (item === folderToOpen[0]) {
      folderToOpen.shift();
      return true;
    }
    else return false;
  })

  folderToOpen.forEach((folder) => {
    currentFolder = currentFolder?.files?.find((file) => file.name === folder);
  })

  return currentFolder;
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
      const currentFolder = traversalHelper(folderToOpen, mainLocation, state);
      currentFolder.isOpen = true;
      if (currentFolder.files?.length > 0) return;
      currentFolder.files = action.payload.files;
    },

    closeFolder: (state, action) => {
      const folderToOpen = action.payload.location.split('\\');
      const mainLocation = state.location.split('\\');
      const currentFolder = traversalHelper(folderToOpen, mainLocation, state);
      currentFolder.isOpen = false;
    },

    openFile: (state, action) => {
      const fileToOpen = action.payload.location.split('\\');
      const fileToClose = action.payload.prevLocation.split('\\');
      const mainLocation = state.location.split('\\');
      const currentFile = traversalHelper(fileToOpen, mainLocation, state);
      const prevFile = traversalHelper(fileToClose, mainLocation, state);
      currentFile.isOpen = true;
      if(prevFile) prevFile.isOpen = false;

    }
  }
})

export const { loadNewLocation, loadFolderContents, closeFolder, openFile } = fileDirectorySlice.actions;

export default fileDirectorySlice.reducer;
import { loadNewLocation, loadFolderContents, closeFolder} from '../state/fileDirectorySlice';
import { viewableExtensions } from '../constants/viewableExtensions';
const fs = window.require('fs');

const mapDirectory = (files) => {
  const mappedFiles = files.map((file) => {
    const splitFileName = file.name.split('.');
    const extension = splitFileName.pop();

    return { 
      name: file.name, 
      isFolder: file.isDirectory(), 
      isFile: file.isFile(),
      isOpen: false,
      extension
    }
  });

  return mappedFiles.filter((file) => (file.isFolder || viewableExtensions.includes(file.extension.toLowerCase())));
}

export const openNewDirectory = (location, dispatch) => {
  fs.readdir(location, {withFileTypes: true}, (err,files) => {
    dispatch(loadNewLocation({ location, files: mapDirectory(files) }))
  })
}

export const openFolderInDirectory = (location, dispatch) => {
  fs.readdir(location, {withFileTypes: true}, (err,files) => {
    dispatch(loadFolderContents({ location, files: mapDirectory(files) }))
  })
}

export const closeFolderInDirectory = (location, dispatch) => {
  dispatch(closeFolder({location}))
}
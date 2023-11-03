import { loadNewLocation, loadFolderContents, closeFolder, openFile } from '../state/fileDirectorySlice';
import { loadFile, setContentIsLoading } from '../state/contentsSlice';
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

export const openImage = (location, prevLocation, dispatch) => {
  const imgData = fs.readFileSync(location).toString('base64');
  dispatch(loadFile({location, content: imgData, type: 'img'}));
  dispatch(openFile({location, prevLocation}))
}

export const openNotes = (location, prevLocation, dispatch) => {
  dispatch(setContentIsLoading());
  fs.readFile(location, 'utf8', (err, notesData) => {
    if (err) {
      return;
    }
    dispatch(loadFile({location, content: notesData, type: 'md'}));
    dispatch(openFile({location, prevLocation}));
  });
}
import React, { useEffect } from 'react';
import { ExplorerPanelStyled, FileSection } from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton.js';
import { openNewDirectory, openFolderInDirectory } from '../../helpers/directoryHelper.js';
import FileTree from './FileTree.js';

const ipcRenderer = window.require("electron").ipcRenderer;

const ExplorerPanel = () => {
  const dispatch = useDispatch();
  let location = useSelector((state) => state.fileDirectory.location);
  const files = useSelector((state) => state.fileDirectory.files);

  useEffect(async () => {
    openNewDirectory(location, dispatch);
  }, [])

  const openNewFolder = async () => {
    ipcRenderer.send('open-file-dialog');
  }

  ipcRenderer.on('selected-folder', function (evt, msgData) {
    const { filePaths } = msgData;
    if ( filePaths?.length === 0 )  return;
    location = filePaths[0]
    openNewDirectory(location, dispatch);
    window.localStorage.setItem('lastOpenedLocation', location);
  })

  return <ExplorerPanelStyled>
      <PrimaryButton onClick={openNewFolder}>Open New Folder</PrimaryButton>
      <FileTree files={files} path={location}/>
    </ExplorerPanelStyled>
}

export default ExplorerPanel;
import React, { useEffect } from 'react';
import { ExplorerPanelStyled, FileSection } from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton.js';
import { openNewDirectory, openFolderInDirectory } from '../../helpers/directoryHelper.js';
import arrow from './arrow.svg';
import closedFolder from './closedFolder.svg';

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

  const handleClick = (file) => {
    if(file.isFolder) {
      const folderLocation = `${location}\\${file.name}`
      openFolderInDirectory(folderLocation, dispatch)
    }
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
      {files ? files.map(file => (
        <FileSection key={file.name} onClick={(e) => handleClick(file)}>
          {file.isFolder && <div style={{paddingRight: "10px"}}><img src={closedFolder}/></div>}
          {file.name}
        </FileSection>
      )) : <div style={{padding: "20px"}}>No Directory Selected</div>}
    </ExplorerPanelStyled>
}

export default ExplorerPanel;
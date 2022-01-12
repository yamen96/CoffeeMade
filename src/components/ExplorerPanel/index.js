import React, { useState, useEffect } from 'react';
import { ExplorerPanelStyled } from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { openNewDirectory } from '../../helpers/directoryHelper.js';
import FileTree from './FileTree.js';
import ResizeArea from './ResizeArea.js';

const ipcRenderer = window.require("electron").ipcRenderer;

const ExplorerPanel = () => {
  const dispatch = useDispatch();
  let location = useSelector((state) => state.fileDirectory.location);
  const files = useSelector((state) => state.fileDirectory.files);
  const [panelWidth, setPanelWidth] = useState(200);

  useEffect(async () => {
    if (location)
      openNewDirectory(location, dispatch);
  }, [])

  ipcRenderer.on('selected-folder', function (evt, msgData) {
    const { filePaths } = msgData;
    if ( filePaths?.length === 0 )  return;
    location = filePaths[0]
    openNewDirectory(location, dispatch);
    window.localStorage.setItem('lastOpenedLocation', location);
  })

  return <div style={{display: "flex"}}>
      <ExplorerPanelStyled width={panelWidth}>
        <FileTree files={files} path={location}/>
      </ExplorerPanelStyled>
      <ResizeArea setPanelWidth={setPanelWidth}/>
    </div>
}

export default ExplorerPanel;
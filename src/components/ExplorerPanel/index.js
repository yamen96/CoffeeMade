import React, { useEffect } from 'react';
import { ExplorerPanelStyled } from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { openNewDirectory } from '../../helpers/directoryHelper.js';
import FileTree from './FileTree.js';
import ResizePanel from 'react-resize-panel';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .ResizePanel-module_ResizeBarHorizontal__3TBZ5 {
    width: 5px;
    margin-left: -5px;
    :hover {
      background-color: ${props => props.theme.primaryButtonColor};
    }  
  }
`

const ipcRenderer = window.require("electron").ipcRenderer;

const ExplorerPanel = ({isVisible}) => {
  const dispatch = useDispatch();
  let location = useSelector((state) => state.fileDirectory.location);
  const files = useSelector((state) => state.fileDirectory.files);

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

  if (isVisible) {
    return <StyledWrapper>
      <ResizePanel direction="e" borderClass="" handleClass="test">
        <ExplorerPanelStyled >
            <FileTree files={files} path={location}/>
        </ExplorerPanelStyled>
      </ResizePanel>
    </StyledWrapper>  
  } else {
    return <React.Fragment />
  }

}

export default ExplorerPanel;
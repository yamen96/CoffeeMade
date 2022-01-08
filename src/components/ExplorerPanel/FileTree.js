import React from 'react';
import { StyledFileName, Indent } from './styles.js';
import { openFolderInDirectory, closeFolderInDirectory} from '../../helpers/directoryHelper.js';
import {  useDispatch } from 'react-redux';
import openFolder from './openFolder.svg';
import closedFolder from './closedFolder.svg';

const FileTree = ({files, path}) => {
  const dispatch = useDispatch();

  const handleClick = (file) => {
    if(file.isFolder) {
      const folderLocation = `${path}\\${file.name}`;

      if(!file.isOpen){
        openFolderInDirectory(folderLocation, dispatch);
      } else if (file.isOpen) {
        closeFolderInDirectory(folderLocation, dispatch)
      }

    }
  }

  return <div>
     {files ? files.map(file => (
        <div key={file.name}>
          <StyledFileName onClick={(e) => handleClick(file)}>
            {file.isFolder && <div style={{paddingRight: "10px"}}><img src={file.isOpen ? openFolder : closedFolder}/></div>}
            {file.name}
          </StyledFileName>
          {file.isFolder && file.isOpen && file.files.length > 0 && <div style={{display: "flex"}}>
              <Indent />
              <div style={{flexGrow: "1"}}>
                <FileTree files={file.files} path={`${path}\\${file.name}`}/>
              </div>
            </div>}
        </div>
      )) : <div style={{padding: "20px"}}>No Directory Selected</div>}
  </div>
}

export default FileTree;
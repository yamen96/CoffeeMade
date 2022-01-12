import React from 'react';
import { StyledFileName, Indent, StyledText } from './styles.js';
import { openFolderInDirectory, closeFolderInDirectory, openImage } from '../../helpers/directoryHelper.js';
import { useDispatch, useSelector } from 'react-redux';
import openFolder from './openFolder.svg';
import closedFolder from './closedFolder.svg';
import img from './img.svg';
const fs = window.require('fs');

const FileTree = ({files, path}) => {
  const dispatch = useDispatch();
  const prevFileLocation = useSelector((state) =>  state.contents.location)

  const handleClick = (file) => {
    if(file.isFolder) {
      const folderLocation = `${path}\\${file.name}`;

      if(!file.isOpen){
        openFolderInDirectory(folderLocation, dispatch);
      } else if (file.isOpen) {
        closeFolderInDirectory(folderLocation, dispatch)
      }
    } else {
      const fileLocation = `${path}\\${file.name}`;
      if (file.extension !== "md"){
        openImage(fileLocation, prevFileLocation, dispatch)
      }
    }
  }

  return <div>
     {files && files.length > 0 ? files.map(file => (
        <div key={`${path}\\${file.name}`}  >
          <StyledFileName  onClick={(e) => handleClick(file)} className={file.isOpen && file.isFile ? 'isOpen' : ''}>
            {file.isFolder && <div style={{paddingRight: "10px"}}><img src={file.isOpen ? openFolder : closedFolder}/></div>}
            {file.isFile && file.extension !== 'md' && <div style={{paddingRight: "10px"}}><img src={img}/></div>}
            {file.name}
          </StyledFileName>
          {file.isFolder && file.isOpen && file.files.length > 0 && <div style={{display: "flex"}}>
              <Indent />
              <div style={{flexGrow: "1"}}>
                <FileTree files={file.files} path={`${path}\\${file.name}`}/>
              </div>
            </div>}
        </div>
      )) : <StyledText>No Directory Selected</StyledText>}
  </div>
}

export default FileTree;


import React, { useState, useEffect } from 'react';
import styled from "styled-components";

export const StyledResizeArea = styled.div`
  overflow: hidden;
  height: calc(100vh - 40px);
  transition: all 0.2s ease-in-out;
  z-index: 20;
  margin: 0 auto; 
  width: 5px;
  top: 40px;
  cursor: ew-resize;
  :hover {
    background-color: ${props => props.theme.primaryButtonColor};
  }
  &.resizing {
    background-color: ${props => props.theme.primaryButtonColor};
  }
  margin-right: 20px;
`

const ResizeArea = ({setPanelWidth}) => {
  const maxWidth = 600;
  const minWidth = 100;
  const [isResizing, setIsResizing] = useState(false);

  const handleDrag = (e) => {
    const dragPos = e.clientX - 70;
    setIsResizing(true);
    if (dragPos < maxWidth && dragPos > minWidth){
      setPanelWidth(dragPos)
    }
  }

  return <StyledResizeArea 
    className={isResizing ? 'resizing' : ''}
    onDrag={handleDrag} 
    onDragEnd={(e) => {setIsResizing(false)}}
  />
}

export default ResizeArea;

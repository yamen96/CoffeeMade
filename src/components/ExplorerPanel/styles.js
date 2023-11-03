import styled from "styled-components";
import React from 'react';

export const ExplorerPanelStyled = styled.div`
  background-color: ${props => props.theme.titleBarColor};
  height: calc(100vh - 40px);
  z-index: 5;
  min-width: 200px;
  top: 40px;
  transition: width 0.1s ease-in-out;

  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarThumbColor};
    width: 10px;    
    height: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.scrollbarThumbColorOnHover};  
 `

export const StyledFileName = styled.p`
  font-size: 0.9rem;
  overflow: hidden;
  max-width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-item: center;
  padding: 5px 10px;
  color:  ${props => props.theme.explorerPanelFontColor};
  cursor: pointer;
  max-height: 100px;
  :hover {
    background-color: ${props => props.theme.name.includes("dark") ? 'rgb(255, 255, 255, 0.05)' : 'rgb(0, 0, 0, 0.05)'};
  }
  border-radius: 3px;
  margin: 2px;
  transition: all 0.2s ease-in-out;
  &.isOpen {
    background-color: ${props => props.theme.name.includes("dark") ? 'rgb(255, 255, 255, 0.1)' : 'rgb(0, 0, 0, 0.1)'};
    display: flex;
    align-items: center; 
    border-left: 4px solid ${({theme}) => theme.primaryButtonColor};
  }
`

export const StyledText = styled.div`
  color:  ${props => props.theme.explorerPanelFontColor};
  padding: 20px;
`

export const Indent = () => {
 return <div style={{display: "flex"}}>
   <div style={{width: "19px", borderRight: "1px solid rgb(120, 127, 141, 0.3"}} />
   <div style={{width: "5px"}}/>
 </div>
}
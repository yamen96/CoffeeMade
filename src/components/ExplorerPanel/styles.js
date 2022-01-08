import styled from "styled-components"

export const ExplorerPanelStyled = styled.div`
  background-color: ${props => props.theme.titleBarColor};
  overflow: hidden;
  height: calc(100vh - 40px);
  z-index: 5;
  margin: 0 auto; 
  width: 200px;
  top: 40px;

  &:hover {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.scrollbarThumbColor};
      width: 10px;    
      height: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.scrollbarThumbColorOnHover};  
  }
 `

export const FileSection = styled.div`
  padding: 5px 10px;
  color:  ${props => props.theme.explorerPanelFontColor};
  cursor: pointer;
  margin: 0px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${props => props.theme.name.includes("dark") ? 'rgb(255, 255, 255, 0.05)' : 'rgb(0, 0, 0, 0.05)'};;
  }
  // border-radius: 3px;
  transition: all 0.2s;
`

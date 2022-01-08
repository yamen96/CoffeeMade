import styled from "styled-components"

export const LeftToolbarStyled = styled.div`
  background-color: ${props => props.theme.leftToolbarColor};
  overflow: hidden;
  height: calc(100vh - 40px);
  z-index: 10;
  margin: 0 auto;
  width: 70px;
  top: 40px;
`

export const ToolbarIconWrapper = styled.div`
  padding: 15px;
  cursor: pointer;
  border-left: 4px solid ${props => props.isSelected ? 'white' : 'transparent'};
  :hover {
    background-color: rgb(255, 255, 255, 0.05);
  }
  transition: all 0.2s;
`

export const ToolbarIconStyled = styled.img`
  width: 30px;
  cursor: pointer;
`

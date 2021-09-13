import styled from "styled-components"

export const LeftToolbarStyled = styled.div`
  background-color: ${props => props.theme.leftToolbarColor};
  overflow: hidden;
  display: flex;
  height: calc(100vh - 40px);
  z-index: 10;
  justify-content: center;
  position: fixed;
  width: 65px;
  top: 40px;
`
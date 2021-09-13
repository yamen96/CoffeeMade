import styled from "styled-components"

export const MainEditorStyled = styled.div`
  border: none;
  outline:none;
  color: ${props => props.theme.fontColor};
  width: calc(100vw - 65px);
  font-size: 22px;
  height: calc(100vh - 40px);
  font-family: 'Helvetica Neue', sans-serif;
  padding: 40px 60px;
  overflow-y: auto;
  box-sizing: border-box;
  margin: 0px 0px 0px auto;
  transition: background .5s;
  ::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarThumbColor};
    width: 15px;    
    height: 15px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.scrollbarThumbColorOnHover};
}
`
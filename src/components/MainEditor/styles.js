import styled from "styled-components"

export const MainEditorStyled = styled.div`
  border: none;
  outline:none;
  color: ${props => props.theme.fontColor};
  font-size: 22px;
  height: calc(100vh - 40px);
  font-family: 'Helvetica Neue', sans-serif;
  padding: 40px 60px;
  overflow-y: auto;
  flex: 1;
  box-sizing: border-box;
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
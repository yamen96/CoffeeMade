import styled from "styled-components"

export const MainViewStyled = styled.div`
  border: none;
  outline:none;
  color: ${props => props.theme.fontColor};
  font-size: 22px;
  height: calc(100vh - 40px);
  font-family: 'Helvetica Neue', sans-serif;
  padding: 40px 70px;
  flex: 1;
  box-sizing: border-box;
  transition: background .5s;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 15px;
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
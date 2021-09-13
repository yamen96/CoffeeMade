import styled from "styled-components"
import closeImg from './exit.svg';
import closeImgHover from './exit-hover.svg';
import minimizeImg from './minimize.svg';
import maximizeImg from './maximize.svg';
import unMaximizeImg from './unmaximize.svg';


export const TitleBarStyled = styled.div`
  background-color: ${props => props.theme.titleBarColor};
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  -webkit-user-select: none;
`
export const DraggableArea = styled.div`
  width: 100%;
  -webkit-user-select: none;
  -webkit-app-region: drag;
`

export const CloseButton = styled.button`
  background: url(${closeImg}) no-repeat center;
  width : 55px;
  border: none;
  transition: all 0.2s;

  &:hover {
    background: url(${closeImgHover}) no-repeat center red;
    color: white;
  }
`

export const MinimizeButton = styled.button`
  background: url(${minimizeImg}) no-repeat center;
  width : 55px;
  border: none;
  transition: all 0.2s;

  &:hover {
    background: url(${minimizeImg}) no-repeat center ${props => props.theme.scrollbarThumbColorOnHover};
  }
`

export const MaximizeButton = styled.button`
  background: url(${props => props.maximized ? maximizeImg : unMaximizeImg}) no-repeat center;
  width : 55px;
  border: none;
  transition: all 0.2s;

  &:hover {
    background: url(${props => props.maximized ?  maximizeImg : unMaximizeImg}) no-repeat center ${props => props.theme.scrollbarThumbColorOnHover};
  }
`
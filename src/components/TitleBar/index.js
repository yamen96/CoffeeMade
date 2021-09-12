import React, { useContext, useState } from 'react';
import { TitleBarStyled, CloseButton, MinimizeButton, MaximizeButton, DraggableArea } from './styles';
import { ThemeContext } from '../../App.js';
const ipcRenderer = window.require("electron").ipcRenderer;

const TitleBar = () => {
  const [maximized, setMaximized ] = useState(true);
  const theme = useContext(ThemeContext);

  const minimizeClickHandler = (e) => {
    ipcRenderer.send('minimize');
  }

  const closeClickHandler = (e) => {
    ipcRenderer.send('exit');
  }

  const maximizeClickHandler = (e) => {
    maximized ? ipcRenderer.send('maximize') : ipcRenderer.send('un-maximize');
    setMaximized(!maximized)
  }

  ipcRenderer.on('maximize-message', function (evt, message) {
    message && setMaximized(!message.maximized)
  });

  return <TitleBarStyled theme={theme}>
    <DraggableArea />
    <MinimizeButton onClick={minimizeClickHandler} theme={theme}/>
    <MaximizeButton maximized={maximized} onClick={maximizeClickHandler} theme={theme}/>
    <CloseButton onClick={closeClickHandler} theme={theme}/>
  </TitleBarStyled>
}

export default TitleBar;
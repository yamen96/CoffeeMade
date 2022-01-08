import React, { useState } from 'react';
import { TitleBarStyled, CloseButton, MinimizeButton, MaximizeButton, DraggableArea } from './styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
const ipcRenderer = window.require("electron").ipcRenderer;

const TitleBar = ({toggleTheme}) => {
  const [maximized, setMaximized ] = useState(true);

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

  return <TitleBarStyled>
      <DraggableArea />
      <ThemeToggle onClick={toggleTheme}/>
      <MinimizeButton onClick={minimizeClickHandler}/>
      <MaximizeButton maximized={maximized} onClick={maximizeClickHandler}/>
      <CloseButton onClick={closeClickHandler}/>
  </TitleBarStyled>
}

export default TitleBar;
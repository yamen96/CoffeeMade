import React, { useState } from 'react';
import { TitleBarStyled, CloseButton, MinimizeButton, MaximizeButton, DraggableArea } from './styles';
import {  useSelector } from 'react-redux';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import coffee from './coffee.svg'
const ipcRenderer = window.require("electron").ipcRenderer;

const TitleBar = ({toggleTheme}) => {
  const [maximized, setMaximized ] = useState(true);
  const location = useSelector((state) => state.fileDirectory?.location)?.split('\\')?.pop() || "Undefined Location";
  const title = useSelector((state) => state.contents?.name);

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
      <DraggableArea>
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}><img src={coffee} /> {location}</div>
        <div style={{paddingLeft: "10rem", overflow: "hidden"}}>{title}</div>
        <div></div>
      </DraggableArea>
      <ThemeToggle onClick={toggleTheme}/>
      <MinimizeButton onClick={minimizeClickHandler}/>
      <MaximizeButton maximized={maximized} onClick={maximizeClickHandler}/>
      <CloseButton onClick={closeClickHandler}/>
  </TitleBarStyled>
}

export default TitleBar;
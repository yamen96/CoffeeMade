import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import coffee from '../TitleBar/coffee.svg';

const ipcRenderer = window.require("electron").ipcRenderer;

const Intro = () => {

  const openNewFolder = async () => {
    ipcRenderer.send('open-file-dialog');
  }

  return <div style={{maxWidth: "450px", margin: "auto"}} className='unselectable' >
    <div style={{width: "75px", margin: " 10px auto"}}><img src={coffee} width={75} className='unselectable' /></div>
    <br className='unselectable' />
    <div style={{textAlign: "center"}} className='unselectable' >
      Welcome to CoffeeMade, a markdown editor / note taking app.
      <br/><br/>
      Please select a file to view its contents or open a new folder.
    </div>
    <div style={{maxWidth: "500px", margin: "20px auto"}}>
      <PrimaryButton onClick={openNewFolder}>Open New Folder</PrimaryButton>
    </div>
  </div>
}

export default Intro;
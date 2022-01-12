import React, { useState, useRef, useEffect } from 'react';
import { MainEditorStyled } from './styles';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useSelector } from 'react-redux';
import coffee from '../TitleBar/coffee.svg';

const ipcRenderer = window.require("electron").ipcRenderer;

const MainEditor = () => {
	const [mainText, setMainText] = useState("");
  const textRef = useRef();
	const contentType = useSelector((state) => state.contents.type);
	const content = useSelector((state) => state.contents.content);

  useEffect(() => {
    textRef.current.focus();
  }, [])

	const openNewFolder = async () => {
    ipcRenderer.send('open-file-dialog');
  }

  const onChangeHandler = (e) => {
		setMainText(e.currentTarget.innerText);
	};
	// return <MainEditorStyled 
	// 			contentEditable
	// 			suppressContentEditableWarning
	// 			ref={textRef} 
	// 			spellCheck={false} 
	// 			onInput={onChangeHandler} 
	// 			/>
	return <MainEditorStyled ref={textRef} >

		{contentType === 'none' && <div style={{maxWidth: "450px", margin: "auto"}} className='unselectable' >
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
		</div>}

		{ contentType !== 'md' && contentType !== 'none' && <img src={`data:image/png;base64,${content}`} style={{maxWidth: "100%"}}/>}

	</MainEditorStyled>
}

export default MainEditor;
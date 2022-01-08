import React, { useState, useRef, useEffect } from 'react';
import { MainEditorStyled } from './styles';
import moment from 'moment';

const MainEditor = () => {
	const [mainText, setMainText] = useState("");
	const [lastEdited, setLastEdited] = useState( new moment().format('MMMM Do, YYYY, h:mm A'));
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, [])

  const onChangeHandler = (e) => {
		setMainText(e.currentTarget.innerText);
		setLastEdited(moment().format('MMMM Do, YYYY, h:mm a'));
	};
	return <MainEditorStyled 
				contentEditable
				suppressContentEditableWarning
				ref={textRef} 
				spellCheck={false} 
				onInput={onChangeHandler} 
				/>
}

export default MainEditor;
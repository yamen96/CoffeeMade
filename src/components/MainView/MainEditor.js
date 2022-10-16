import React, { useState, useEffect } from 'react';
import { markdownToDraft } from 'markdown-draft-js';
import { Editor, EditorState, convertFromRaw, RichUtils } from 'draft-js';
import { useSelector } from 'react-redux';

const MainEditor = () => {
	const content = useSelector((state) => state.contents.content);
  const contentIsLoading = useSelector((state) => state.contents.isLoading);
  const [ editorState, setEditorState ] = useState(EditorState.createEmpty());

  const markDownToEditorState = (markdown) => {
		if (content && !contentIsLoading){
			const rawData = markdownToDraft(markdown);
			const contentState = convertFromRaw(rawData);
			return EditorState.createWithContent(contentState);
		}
	}

	const onChange = (e) => {setEditorState(e)}

	const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

	const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }

	useEffect(() => {
		setEditorState(markDownToEditorState(content) || EditorState.createEmpty())
  }, [contentIsLoading])

  return <div>
		<Editor editorState={editorState} onChange={onChange} handleKeyCommand={handleKeyCommand} />
  </div>
}

export default MainEditor;
import React from 'react';
import { useSelector } from 'react-redux';
import { MainViewStyled } from './styles';
import Intro from './Intro';
import ImageViewer from './ImageViewer';
import MainEditor from './MainEditor';

const MainView = () => {
	const contentType = useSelector((state) => state.contents.type);

	let mainView;

	switch (contentType) {
		case 'none':
			mainView = <Intro />;
			break;
		case 'img':
			mainView = <ImageViewer />;
			break;
		case 'md':
			mainView = <MainEditor />;
	}
	return <MainViewStyled>
		{ mainView }
	</MainViewStyled>
}

export default MainView;
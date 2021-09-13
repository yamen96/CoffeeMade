import styled from "styled-components"
import React from 'react';
import TitleBar from './components/TitleBar';
import LeftToolbar from './components/LeftToolbar';
import MainEditor from './components/MainEditor';
import { themes } from './constants/themes';

export const ThemeContext = React.createContext({});

const MainApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
` 

function App() {
  const defaultStartupTheme = themes.defaultDark;

  return (
    <ThemeContext.Provider value={defaultStartupTheme}>
      <MainApp theme={defaultStartupTheme}>
        <TitleBar />
        <LeftToolbar />
        <MainEditor />  
      </MainApp>
    </ThemeContext.Provider>
  );
}

export default App;

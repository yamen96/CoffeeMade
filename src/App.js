import styled from "styled-components"
import React from 'react';
import TitleBar from './components/TitleBar';
import MainEditor from './components/MainEditor';
import { themes } from './constants/themes';
export const ThemeContext = React.createContext({});

const MainApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

function App() {
  const defaultStartupTheme = themes.default.dark;

  return (
    <ThemeContext.Provider value={defaultStartupTheme}>
      <MainApp theme={defaultStartupTheme}>
        <TitleBar />
        <MainEditor />  
      </MainApp>
    </ThemeContext.Provider>
  );
}

export default App;

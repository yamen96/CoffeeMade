import React, { useState } from 'react';
import styled from "styled-components"
import TitleBar from './components/TitleBar';
import LeftToolbar from './components/LeftToolbar';
import MainView from './components/MainView';
import ExplorerPanel from "./components/ExplorerPanel";
import { ThemeProvider } from 'styled-components'
import { themes } from './constants/themes';
import useTheme from "./hooks/useTheme";

export const ThemeContext = React.createContext({});

const MainApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
` 

function App() {
  const defaultStartupTheme = themes.default.dark;
  const [theme, toggleTheme] = useTheme(defaultStartupTheme);
  const [explorerIsVisisble, setExplorerIsVisisble] = useState(true);

  const toggleExplorerVisibility = () => {
    setExplorerIsVisisble(!explorerIsVisisble)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <MainApp>
          <TitleBar toggleTheme={toggleTheme}/>
          <div style={{display: "flex"}}>
            <LeftToolbar toggleVisibility={toggleExplorerVisibility}/>
            <ExplorerPanel isVisible={explorerIsVisisble} />
            <MainView />  
          </div>
        </MainApp>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

import styled from "styled-components"
import React from 'react';
import TitleBar from './components/TitleBar';
import LeftToolbar from './components/LeftToolbar';
import MainEditor from './components/MainEditor';
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

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <MainApp>
          <TitleBar toggleTheme={toggleTheme}/>
          <div style={{display: "flex"}}>
            <LeftToolbar />
            <ExplorerPanel />
            <MainEditor />  
          </div>
        </MainApp>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

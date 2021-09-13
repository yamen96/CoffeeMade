import React, { useContext } from 'react';
import { LeftToolbarStyled } from './styles';
import { ThemeContext } from '../../App.js';

const LeftToolbar = () => {
  const theme = useContext(ThemeContext)
  return <LeftToolbarStyled theme={theme}>
    
  </LeftToolbarStyled>
}

export default LeftToolbar;
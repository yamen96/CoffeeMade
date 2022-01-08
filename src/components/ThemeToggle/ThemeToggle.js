import React from 'react'
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from './moon-icon.svg';
import { ReactComponent as SunIcon } from './sun-icon.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.scrollbarThumbColor};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 7px 1vw;
  overflow: hidden;
  padding: 5px;
  position: relative;
  width: 50px;
  height: 26px;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.scrollbarThumbColorOnHover};
  }  

  svg {
    height: auto;
    width: auto;
    transition: all 0.3s ease-in-out;
    
    // sun icon
    &:first-child {
      fill-opacity: ${({ theme }) => theme.name.includes("light") ? '1' : '0'};
      transform: ${({ theme }) => theme.name.includes("light") ? 'translateX(0)' : 'translateX(15px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      fill-opacity: ${({ theme }) => theme.name.includes("light") ? '0' : '1'};
      transform: ${({ theme }) => theme.name.includes("light") ? 'translateX(-15px)' : 'translateX(0)'};
    }
  }
`;

const ThemeToggle = ({ onClick }) => {
  return (
    <ToggleContainer onClick={onClick}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default ThemeToggle;
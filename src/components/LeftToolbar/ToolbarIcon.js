import React from 'react';
import { ToolbarIconWrapper, ToolbarIconStyled } from './styles';

const ToolbarIcon = ({isSelected, srcSelected, srcUnselected, onClick }) => {
  return <ToolbarIconWrapper isSelected={isSelected} onClick={onClick}>
      <ToolbarIconStyled isSelected={isSelected} src={isSelected ? srcSelected : srcUnselected}/>
    </ToolbarIconWrapper>
}

export default ToolbarIcon;
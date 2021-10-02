import React, { useContext, useState } from 'react';
import { LeftToolbarStyled } from './styles';
import { toolBarIcons } from './ToolbarIcons';
import ToolbarIcon from './ToolbarIcon';
import { ThemeContext } from '../../App.js';
import ReactTooltip from 'react-tooltip';

const LeftToolbar = () => {
  const theme = useContext(ThemeContext);
  const [selectedIcon, setSelectedIcon] = useState(toolBarIcons[0]);
  return <LeftToolbarStyled theme={theme}>
      {toolBarIcons.map((icon, index) => (
        <>
        <a data-tip data-for={`icon-tooltip-${index}`}>
        <ToolbarIcon 
          onClick={(e)=>{
            setSelectedIcon(toolBarIcons[index])}}
          key={icon.name}
          isSelected={selectedIcon.name===toolBarIcons[index].name} 
          srcSelected={icon.icon.selected} 
          srcUnselected={icon.icon.unselected}
          />
        </a>
        <ReactTooltip id={`icon-tooltip-${index}`} type="dark" effect='solid' place="right">
          <span>{icon.name}</span>
        </ReactTooltip>
        </>
      )
      )}
  </LeftToolbarStyled>
}

export default LeftToolbar;
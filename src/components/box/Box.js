import { useContext } from 'react';
import { 
  ColorContext, 
  ColorUpdateContext } from '../../contexts/ColorContext';

import './Box.css';

function Box({label}) {
  const colors = useContext(ColorContext);
  const color = colors.at(label - 1);

  const updateColors = useContext(ColorUpdateContext);
  
  return (
    <div className={`box box-${label}`} style={{backgroundColor: color}} onClick={updateColors}>
      <span>{label}</span>
    </div>
  );
}

export default Box;
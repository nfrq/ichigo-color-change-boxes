import './Box.css';
import { colors } from '../../config/colors';

function Box({label}) {
  const color = colors.at(label - 1);
  
  return (
    <div className={`box box-${label}`} style={{backgroundColor: color}}>
      <span>{label}</span>
    </div>
  );
}

export default Box;
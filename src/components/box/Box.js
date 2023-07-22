import './Box.css';

function Box({label, color}) {
  return (
    <div className={`box box-${label}`} style={{backgroundColor: color}}>
      <span>{label}</span>
    </div>
  );
}

export default Box;
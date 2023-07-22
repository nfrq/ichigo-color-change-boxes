import Block from './Block';
import { classNames } from '../../utils/functions';

function Row({children, className = ''}) {
  const classes = classNames('row', className);
  return <Block className={classes} children={children} />;
}

function Column({children, className = ''}) {
  const classes = classNames('col', className);
  return <Block className={classes} children={children} />;
}

export {
  Row, 
  Column
};
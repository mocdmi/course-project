import { useState } from 'react';
import classes from './Color.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  const handlerIncrement = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} type={'button'} onClick={handlerIncrement}>Increment</button>
    </div>
  )
}
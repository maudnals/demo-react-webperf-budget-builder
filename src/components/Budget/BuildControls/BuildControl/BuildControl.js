import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.CountAndInput}>
        <div className={classes.Count}>{props.resourceCount}</div>
        <button className={classes.Button} onClick={props.clickPlusHandler}>+</button>
        <button className={classes.Button} onClick={props.clickMinusHandler}>-</button>
      </div>
    </div>
  );
}

export default buildControl;
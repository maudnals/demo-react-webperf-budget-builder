import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
  let isDisabled = false;
  if (props.resourceCount <= 0) {
    isDisabled = true;
  }
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.CountAndInput}>
        <div className={classes.Count}>
          {props.resourceCount}
        </div>
        <button
          className={classes.Button}
          onClick={props.removeResourceHandler}
          disabled={isDisabled}>-</button>
        <button
          className={classes.Button}
          onClick={props.addResourceHandler}>+</button>
      </div>
    </div>
  );
}

export default buildControl;
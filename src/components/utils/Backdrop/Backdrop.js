import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
  let backdropEl = null;
  if (props.visible) {
    backdropEl = <div className={classes.Backdrop}></div>
  }
  return backdropEl;
}

export default backdrop;
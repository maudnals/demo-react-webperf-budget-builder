import React from 'react';
import classes from './Modal.css';

const modal = (props) => {
  const modalClass = props.visible ?
    [classes.Visible, classes.Modal].join(' ')
    :
    [classes.Hidden, classes.Modal].join(' ');

  return (
    <div className={modalClass}>
      {props.children}
    </div>
  );
}

export default modal;
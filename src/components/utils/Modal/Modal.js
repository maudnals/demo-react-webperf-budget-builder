import React, {Fragment} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const modalClass = props.visible ?
    [classes.Visible, classes.Modal].join(' ')
    :
    [classes.Hidden, classes.Modal].join(' ');

  return (
    <Fragment>
      <Backdrop visible={props.visible}></Backdrop>
      <div className={modalClass}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default modal;
import React, { Fragment } from 'react';
import logoAsset from '../../../assets/img/app-logo.png';
import classes from './Logo.css';

const logo = (props) => {
  return (
    <Fragment>
      <div className={classes.LogoWrapper}>
        <img src={logoAsset} alt="" />
      </div>
    </Fragment>);
};

export default logo;
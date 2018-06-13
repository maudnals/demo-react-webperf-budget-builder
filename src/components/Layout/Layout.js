import React, { Fragment } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <Fragment>
      <Toolbar></Toolbar>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default layout;
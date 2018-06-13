import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../utils/Logo/Logo';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo></Logo>
      <div>Menu</div>
      <nav>
        <ul></ul>
      </nav>
    </header>
  )
}

export default toolbar;
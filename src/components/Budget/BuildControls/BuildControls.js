import React, { Fragment } from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = (props) => {
  const controls = Object.keys(props.resources).map(k => {
    return (
      <BuildControl
        key={k}
        resourceCount={props.resources[k]}
        label={k}
        addResourceHandler={props.addResourceHandler.bind(this, k)}
        removeResourceHandler={props.removeResourceHandler.bind(this, k)} />
    );
  });

  const orderButtonClass = props.orderable ?
    [classes.Button, classes.Ok].join(' ')
    :
    [classes.Button, classes.NOk].join(' ');

  return (
    <Fragment>
      <div>
        Price: {props.totalPrice}
      </div>
      {controls}
      <button onClick={props.orderHandler} className={orderButtonClass}>
        Order now
      </button>
    </Fragment>
  )
}

export default buildControls;
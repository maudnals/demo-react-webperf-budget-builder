import React, { Fragment } from 'react';
import classes from './OrderSummary.css';

const orderSummary = (props) => {
  const resourcesList = Object.keys(props.resources)
    .map(k => {
      return (
        <li key={k}>
          <span className={classes.ResourceName}>{k}</span>:
           {props.resources[k]} KBits
        </li>);
    });
  return (
    <Fragment>
      <h3>Performance budget summary</h3>
      <ul>
        {resourcesList}
      </ul>
      <button onClick={props.orderStepOneHandler}>
        Continue to checkout
      </button>
    </Fragment>
  )
}

export default orderSummary;
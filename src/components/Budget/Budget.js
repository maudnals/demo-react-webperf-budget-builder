import React, { Fragment } from 'react';
import BudgetResource from './BudgetResource/BudgetResource';
import classes from './Budget.css';

const budget = (props) => {

  const resources = Object.keys(props.resources)
    .map(k => {
      return [...Array(props.resources[k])]
        .map((_, index) => {
          return <BudgetResource type={k} name={k} key={k + index} />;
        });
    })
    .reduce((accumulator, currentvalue) => {
      return [...accumulator, ...currentvalue];
    }, []);

  const callToAction = resources.length > 0 ?
    null
    :
    "Add resources";

  return (
    <Fragment>
      <div>
        {callToAction}
      </div>
      <div className={classes.Budget}>
        {resources}
      </div>
    </Fragment>
  );
}

export default budget;
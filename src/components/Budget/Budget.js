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
    });

  const resourcesCount = Object.keys(props.resources)
    .reduce((accumulator, currentIndex) => {
      return accumulator + props.resources[currentIndex];
    }, 0);


  const callToAction = resourcesCount ?
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
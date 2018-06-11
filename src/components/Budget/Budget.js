import React from 'react';
import BudgetResource from './BudgetResource/BudgetResource';
import classes from './Budget.css';

const budget = (props) => {
  return (
    <div className={classes.Budget}>
      <BudgetResource type="html" name="HTML" />
    </div>
  );
}

export default budget;
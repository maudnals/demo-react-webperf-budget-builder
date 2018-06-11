import React, { Component, Fragment } from 'react';

class BudgetBuilder extends Component {

  state = {
    price: 0,
    ingredients: [
      {
        salad: 0
      }
    ]
  }

  render() {
    return(
      <Fragment>
        Budget builder!
        <div>budget preview</div>
        <div>controls</div>
      </Fragment>
    )
  }
}

export default BudgetBuilder;
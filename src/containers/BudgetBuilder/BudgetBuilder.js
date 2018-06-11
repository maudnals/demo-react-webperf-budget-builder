import React, { Component, Fragment } from 'react';
import Budget from '../../components/Budget/Budget';

class BudgetBuilder extends Component {

  state = {
    price: 0,
    resources: [
      {
        name: "html",
        count: 0
      },
      {
        name: "css",
        count: 0
      },
    ]
  }

  render() {
    return (
      <Fragment>
        Budget builder!
        <div>
          <Budget/>
        </div>
        <div>controls</div>
      </Fragment>
    )
  }
}

export default BudgetBuilder;
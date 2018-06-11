import React, { Component, Fragment } from 'react';
import Budget from '../../components/Budget/Budget';

class BudgetBuilder extends Component {

  state = {
    price: 0,
    resources: {
      html: 10,
      css: 0,
      bundle: 0,
      ads: 0,
    }
  }

  render() {
    return (
      <Fragment>
        <Budget resources={this.state.resources} />
        <div>
          controls
          </div>
      </Fragment>
    )
  }
}

export default BudgetBuilder;
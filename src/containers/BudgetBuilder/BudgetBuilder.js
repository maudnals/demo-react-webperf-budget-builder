import React, { Component } from 'react';
import Budget from '../../components/Budget/Budget';
import BuildControls from '../../components/Budget/BuildControls/BuildControls';
import classes from './BudgetBuilder.css';

class BudgetBuilder extends Component {

  state = {
    price: 0,
    resources: {
      html: 10,
      css: 3,
      bundle: 0,
      ads: 0,
    }
  }

  clickPlusHandler = (resource, event) => {
    this.updateResourceCount(resource, +1);
  }

  clickMinusHandler = (resource, event) => {
    this.updateResourceCount(resource, -1);
  }

  updateResourceCount = (resource, offset) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        resources: {
          ...prevState.resources,
          [resource.toString()]: prevState.resources[resource] + offset < 0 ? 0 : prevState.resources[resource] + offset
        }
      }
    });
  }

  render() {
    return (
      <div className={classes.BudgetBuilder}>
        <div>
          <Budget resources={this.state.resources} />
        </div>
        <div>
          <BuildControls
            resources={this.state.resources}
            clickPlusHandler={this.clickPlusHandler}
            clickMinusHandler={this.clickMinusHandler}
          />
        </div>
      </div>
    )
  }
}

export default BudgetBuilder;
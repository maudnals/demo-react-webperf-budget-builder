import React, { Component } from 'react';
import Budget from '../../components/Budget/Budget';
import BuildControls from '../../components/Budget/BuildControls/BuildControls';
import Modal from '../../components/utils/Modal/Modal';
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

  addResourceHandler = (resourceType, event) => {
    this.updateResourceCount(resourceType, +1);
  }

  removeResourceHandler = (resourceType, event) => {
    this.updateResourceCount(resourceType, -1);
  }

  updateResourceCount = (resourceType, offset) => {
    this.setState((prevState) => {
      return {
        resources: {
          ...prevState.resources,
          [resourceType.toString()]:
            prevState.resources[resourceType] + offset < 0 ?
              0
              :
              prevState.resources[resourceType] + offset
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
            addResourceHandler={this.addResourceHandler}
            removeResourceHandler={this.removeResourceHandler}
          />
        </div>
        <Modal>
          Order successful
        </Modal>
      </div>
    )
  }
}

export default BudgetBuilder;
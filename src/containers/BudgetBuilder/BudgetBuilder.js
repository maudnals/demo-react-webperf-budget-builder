import React, { Component } from 'react';
import Budget from '../../components/Budget/Budget';
import BuildControls from '../../components/Budget/BuildControls/BuildControls';
import Modal from '../../components/utils/Modal/Modal';
import OrderSummary from '../../components/Budget/OrderSummary/OrderSummary';
import classes from './BudgetBuilder.css';

const INGREDIENT_PRICES = {
  html: 0.5,
  css: 0.8,
  bundle: 1.6,
  ads: 0.2,
}

class BudgetBuilder extends Component {

  state = {
    totalPrice: 0,
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
    this.updatePrice();
  }

  updatePrice = () => {
    const totalPrice = Object
      .keys(this.state.resources)
      .reduce((acc, resource) => {
        return acc + INGREDIENT_PRICES[resource] * this.state.resources[resource];
      }, parseFloat(this.state.totalPrice));
    this.setState({
      totalPrice: totalPrice.toFixed(2)
    })
  }

  render() {
    return (
      <div className={classes.BudgetBuilder}>
        <div>
          <Budget resources={this.state.resources} />
        </div>
        {this.state.totalPrice}
        <div>
          <BuildControls
            resources={this.state.resources}
            addResourceHandler={this.addResourceHandler}
            removeResourceHandler={this.removeResourceHandler}
          />
        </div>
        <Modal>
          <OrderSummary
            resources={this.state.resources}>
          </OrderSummary>
        </Modal>
      </div>
    )
  }
}

export default BudgetBuilder;
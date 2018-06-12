import React, { Component } from 'react';
import Budget from '../../components/Budget/Budget';
import BuildControls from '../../components/Budget/BuildControls/BuildControls';
import Modal from '../../components/utils/Modal/Modal';
import OrderSummary from '../../components/Budget/OrderSummary/OrderSummary';
import classes from './BudgetBuilder.css';
import axiosOrders from '../../axios-orders';

const INGREDIENT_PRICES = {
  html: 0.5,
  css: 0.8,
  bundle: 1.6,
  ads: 0.2,
}

const INITIAL_PRICE = 10;

class BudgetBuilder extends Component {

  state = {
    resources: {
      html: 0,
      css: 0,
      bundle: 0,
      ads: 0,
    },
    totalPrice: INITIAL_PRICE,
    orderable: false,
    ordering: false
  }

  addResourceHandler = (resourceType, event) => {
    this.updateResourceCount(resourceType, +1);
  }

  removeResourceHandler = (resourceType, event) => {
    this.updateResourceCount(resourceType, -1);
  }

  updateResourceCount = (resourceType, offset) => {
    const updatedResources = {
      ...this.state.resources,
      [resourceType.toString()]:
        this.state.resources[resourceType] + offset < 0 ?
          0
          :
          this.state.resources[resourceType] + offset
    };
    this.setState((prevState) => {
      return {
        resources: updatedResources
      }
    });
    this.updatePrice(updatedResources);
    this.updatePurchaseable(updatedResources);
  }

  updatePrice = (updatedResources) => {
    const totalPrice = Object
      .keys(updatedResources)
      .reduce((acc, resource) => {
        return acc + parseFloat(INGREDIENT_PRICES[resource] * updatedResources[resource]);
      }, INITIAL_PRICE);
    this.setState({
      totalPrice: totalPrice.toFixed(2)
    });
  }

  updatePurchaseable(updatedResources) {
    const resourcesCount = Object
      .keys(updatedResources)
      .reduce((acc, resource) => {
        return acc + updatedResources[resource];
      }, 0);
    this.setState({
      orderable: resourcesCount > 0
    });
  }

  orderHandler = () => {
    this.setState({
      ordering: true
    });
  }

  orderStepOneHandler = () => {
    console.log("order");
    axiosOrders.post('/orders.json', {
      resources: this.state.resources,
      price: this.state.totalPrice
    }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  closeModalHandler = () => {
    console.log("dhgfhedf");
    this.setState({
      ordering: false
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
            orderHandler={this.orderHandler}
            totalPrice={this.state.totalPrice}
            orderable={this.state.orderable}
          />
        </div>
        <Modal closeModalHandler={this.closeModalHandler} visible={this.state.ordering}>
          <OrderSummary
            resources={this.state.resources}
            cancelOrderHandler={this.closeModalHandler}
            orderStepOneHandler={this.orderStepOneHandler}>
          </OrderSummary>
        </Modal>
      </div>
    )
  }
}

export default BudgetBuilder;
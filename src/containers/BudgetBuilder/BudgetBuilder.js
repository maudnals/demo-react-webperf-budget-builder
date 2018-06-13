import React, { Component, Fragment } from 'react';
import Budget from '../../components/Budget/Budget';
import BuildControls from '../../components/Budget/BuildControls/BuildControls';
import Modal from '../../components/utils/Modal/Modal';
import OrderSummary from '../../components/Budget/OrderSummary/OrderSummary';
import classes from './BudgetBuilder.css';
import axiosOrders from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  html: 0.5,
  css: 0.8,
  bundle: 1.6,
  ads: 0.2,
}

const INITIAL_PRICE = 10;

class BudgetBuilder extends Component {

  state = {
    resources: null,
    totalPrice: INITIAL_PRICE,
    orderable: false,
    ordering: false,
    loading: false
  }

  componentDidMount() {
    console.log("child did mount...");
    axiosOrders.get('https://burger-builder-70aed.firebaseio.com/resources.json')
      .then(response => {
        this.setState({
          resources: response.data
        })
      });
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
    this.setState({
      loading: true
    });
    axiosOrders.post('/orders.json', {
      resources: this.state.resources,
      price: this.state.totalPrice
    }).then((response) => {
      console.log("Order successful", response);
      this.setState({
        loading: false,
        ordering: false,
      });
    }).catch((error) => {
      this.setState({
        loading: false,
        ordering: false,
      });
    });
  }

  closeModalHandler = () => {
    this.setState({
      ordering: false
    });
  }

  render() {

    let orderSummary = this.state.loading ?
      <div>Ordering...</div>
      :
      <OrderSummary
        resources={this.state.resources ? this.state.resources : {}}
        cancelOrderHandler={this.closeModalHandler}
        orderStepOneHandler={this.orderStepOneHandler}>
      </OrderSummary>;

    let budget = this.state.resources ?
      (<Fragment>
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
        </Fragment>
      )
      :
      <div>Loading...</div>;

    return (
      <div className={classes.BudgetBuilder}>
        {budget}
        <Modal
          closeModalHandler={this.closeModalHandler}
          visible={this.state.ordering}>
          {orderSummary}
        </Modal>
      </div>
    )
  }
}

export default withErrorHandler(BudgetBuilder, axiosOrders);
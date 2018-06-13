import React, { Component, Fragment } from 'react';
import Modal from '../../components/utils/Modal/Modal';

const withErrorHandler = (WrappedComponent, axiosOrders) => {
  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {
      console.log("parent will mount...");
      this.requestInterceptor = axiosOrders.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });
      this.responseInterceptor = axiosOrders.interceptors.response.use(
        res => res,
        error => {
          if (error) {
            this.setState({
              error: error.message
            });
          }
          return Promise.reject(error);
        });
    }

    componentWillUnmount() {
      axiosOrders.interceptors.request.eject(this.requestInterceptor);
      axiosOrders.interceptors.request.eject(this.responseInterceptor);
    }

    okError = () => {
      this.setState({
        error: false
      });
    }

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <Modal visible={this.state.error}>
            {this.state.error}
            <button onClick={this.okError}>OK</button>
          </Modal>
        </Fragment>);
    }
  }
}

export default withErrorHandler;
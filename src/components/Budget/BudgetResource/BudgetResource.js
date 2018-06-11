import React, { Component } from 'react';
import classes from './BudgetResource.css';
import PropTypes from 'prop-types';

class BudgetResource extends Component {

  render() {
    let resource = null;
    let colorClass = classes.Default;
    switch (this.props.type) {
      case ("html"):
        colorClass = classes.Html;
        break;
      case "bundle":
        colorClass = classes.Bundle;
        break;
      case "css":
        colorClass = classes.Css;
        break;
      case "ad":
        colorClass = classes.Ad;
        break;
      case "img":
        colorClass = classes.Img;
        break;
      default:
        colorClass = classes.Default;
    }
  
    let resClass = [ colorClass, classes.Box].join(' ');
    return (
      <div className={resClass}>
      </div>
    );
  }
}

BudgetResource.propTypes = {
  type: PropTypes.string.isRequired
};


export default BudgetResource;
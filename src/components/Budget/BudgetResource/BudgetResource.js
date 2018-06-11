import React from 'react';
import classes from './BudgetResource.css';

const budgetResource = (props) => {

  let resource = null;
  let colorClass = classes.Default;

  switch (props.type) {
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
      {props.name}
    </div>
  );
}


export default budgetResource;
import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
  return Object.keys(props.resources).map(k => {
    return (
      <BuildControl
        key={k}
        resourceCount={props.resources[k]}
        label={k}
        addResourceHandler={props.addResourceHandler.bind(this, k)}
        removeResourceHandler={props.removeResourceHandler.bind(this, k)} />
    );
  });
}

export default buildControls;
import React, { Fragment } from 'react';

const InteractiveView = ({ value, onIncrement, actionText }) => (
  <Fragment>
    <h1>{value}</h1>
    <button onClick={onIncrement}>{actionText}</button>
  </Fragment>
);

export default InteractiveView;

import React, { Fragment, useState } from 'react';

const InteractiveView = ({ value, onIncrement, actionText }) => (
  <Fragment>
    <h1>{value}</h1>
    <button onClick={onIncrement}>{actionText}</button>
  </Fragment>
);

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrementHandler = () => setCount(count + 1);

  return (
    <InteractiveView
      value={count}
      onIncrement={onIncrementHandler}
      actionText="Increment"
    />
  );
}

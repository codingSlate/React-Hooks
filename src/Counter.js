import React, { Fragment, useState } from 'react';

const CounrerView = ({ counterValue, onIncrement }) => (
  <Fragment>
    <h1>{counterValue}</h1>
    <button onClick={onIncrement}>Click to increase</button>
  </Fragment>
);

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrementHandler = () => setCount(count + 1);

  return <CounrerView counterValue={count} onIncrement={onIncrementHandler} />;
}

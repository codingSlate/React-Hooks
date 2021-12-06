import React, { Fragment, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const onClickHandler = () => setCount(count + 1);
  return (
    <Fragment>
      <h1>{count}</h1>
      <button onClick={onClickHandler}>Click to increase</button>
    </Fragment>
  );
}

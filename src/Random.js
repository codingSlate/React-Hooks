import React, { useState } from 'react';
import InteractiveView from '/InteractiveView';

const Random = () => {
  const [randomnumber, setRandomnumber] = useState(0);

  const onRandomiseHandler = () => {
    setRandomnumber(Math.floor(Math.random() * 1000));
  };

  return (
    <InteractiveView
      value={randomnumber}
      onAction={onRandomiseHandler}
      actionText="Random Number"
    />
  );
};

export default Random;

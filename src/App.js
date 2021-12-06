import React from 'react';
import './style.css';
import Counter from './Counter';
import Random from './Random';

export default function App() {
  return (
    <div>
      <h3>Counter with useState</h3>
      <Counter />
      {/* <Random /> */}
    </div>
  );
}

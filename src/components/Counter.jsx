import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slice/CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
    </div>
  );
};


export default Counter;

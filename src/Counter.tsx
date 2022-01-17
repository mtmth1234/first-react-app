import React, { useState } from 'react';

type MySetStateAction = number | ((prevState: number) => number);
type MyDispatch = (value: number | ((prevState: number) => number)) => void;

const Counter: React.FC<{}> = () => {
  const init: any = 0;
  const [value, setValue] = useState<number>(init);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;

import React, { useEffect, useRef, useState } from 'react';

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

  const renderTimes = useRef(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This componet was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click me!</button>
    </div>
  );
};

export default Counter;

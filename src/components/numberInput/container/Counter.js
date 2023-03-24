import { createContext, useState } from "react";
import CounterButton from "../item/CounterButton";
import CounterStatus from "../item/CounterStatus";
import './numberInput.scss';

export const CounterContext = createContext({
  value: 0,
  increment: () => {},
  decrement: () => {},
});

const Counter = ({ children, initValue = 0, minimum, maximum }) =>{
  const [count, setCount] = useState(initValue);

  const increment = () =>
    setCount((prev) => {
      if (maximum === undefined) {
        return prev + 1;
      } else {
        return prev < maximum ? prev + 1 : prev;
      }
    });

  const decrement = () =>
    setCount((prev) => {
      if (minimum === undefined) {
        return prev - 1;
      } else {
        return prev > minimum ? prev - 1 : prev;
      }
    });

  return (
    <CounterContext.Provider value={{ value: count, increment, decrement }}>
      <div className="number-input">{children}</div>
    </CounterContext.Provider>
  );
}

Counter.Button = CounterButton;
Counter.Status = CounterStatus;

export default Counter;

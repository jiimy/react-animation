import { createContext, useState } from "react";

const CountContext = createContext({
  count: 0,
  numbers: 111,
  plusCount: () => {},
});

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(14);

  // 함수를 넘겨도됨 
  const plusCount = () => {
    setNumbers(numbers + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        numbers,
        plusCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };

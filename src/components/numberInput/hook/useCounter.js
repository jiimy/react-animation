import { useContext } from "react";
import { CounterContext } from "../container/Counter";

function useCounter() {
  const value = useContext(CounterContext);
  if (!value) {
    throw Error("Conuter Context가 없습니다.");
  }
  return value;
}

export default useCounter;

import useCounter from "../hook/useCounter";

const CounterButton = ({ children, type }) =>{
  const { increment, decrement } = useCounter();
  return (
    <button onClick={type === "increment" ? increment : decrement}>
      {children}
    </button>
  );
}

export default CounterButton;

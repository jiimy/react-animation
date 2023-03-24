import useCounter from "../hook/useCounter";

const CounterStatus = () => {
  const { value } = useCounter();
  return (
    <div>
      <input value={value} />
    </div>
  );
};

export default CounterStatus;

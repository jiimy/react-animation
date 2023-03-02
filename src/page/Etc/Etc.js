import React, { useReducer } from "react";

const Etc = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state >= 0 ? state + 1 : 0;
      case "DECREMENT":
        return state >+ 0 ? state - 1: 0;
      default:
        return state;
    }
  }

  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h2>잡다한 기능 테스트 페이지</h2>
      <h3>리듀서 테스트</h3>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>{number}</div>
    </div>
  );
};

export default Etc;

import React, { useContext, useReducer, useState } from "react";
import { CountContext } from "../../context/Count";
import ContainerQuery from "../../components/containerQuery/ContainerQuery";
import Switch from "../../components/switch/Switch";
// import './etc.scss';

const Etc = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state >= 0 ? state + 1 : 0;
      case "DECREMENT":
        return state > +0 ? state - 1 : 0;
      default:
        return state;
    }
  }

  // 상태를 현재 컴포넌트가 아닌 다른곳에서 사용하고 싶을때
  const [number, dispatch] = useReducer(reducer, 0);
  const { numbers, plusCount } = useContext(CountContext);
  const [rangeState, setRangeState] = useState();

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const style = {
    background: "red",
    color: "white",
  };

  const style2 = {
    background: "blue",
    color: "white",
  };
  return (
    <div>
      <h2>잡다한 기능 테스트 페이지</h2>
      <h3>리듀서 테스트</h3>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>{number}</div>

      <h3>컨텍스트 테스트</h3>
      <button onClick={plusCount}>+ 1</button>
      <div>{numbers}</div>

      <h3>컨테이너 쿼리</h3>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries"
        target="_blank"
        rel="noreferrer"
      >
        css 스펙인 컨테이너 쿼리를 js로 만들어보자
      </a>
      <p>감싼 div의 특정 가로 사이즈일때 내부 div의 css 변경</p>
      {/* 컨테이너의 id용도로 클래스 추가 */}
      <input type="range" 
      // onMouseUp={(e) => setRangeState(e.target.value)} 
      onChange={(e) => setRangeState(e.target.value)} 
      />
      {rangeState}
      <ContainerQuery classname="content-container" size={800} style={style}>
        내용1 size: 800
        <br />
        해상도
      </ContainerQuery>

      <ContainerQuery classname="content-container2" size={1200} style={style2}>
        내용2 size: 1200
      </ContainerQuery>

      <h3>테마 스위치</h3>
      <p>다크 테마의 컨트롤러를 하는 방식</p>
      <Switch />
    </div>
  );
};

export default Etc;

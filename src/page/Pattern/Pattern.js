import React from "react";
import { Dialog } from "../../components/dialog/Dialog";

const Pattern = () => {
  return (
    <div className="pattern-page">
      <h2>패턴 설계에 대한 고민 연구</h2>
      <h3>
        참고 링크 :{" "}
        <a href="https://fe-developers.kakaoent.com/2022/221110-ioc-pattern/">
          https://fe-developers.kakaoent.com/2022/221110-ioc-pattern/
        </a>{" "}
      </h3>
      <div className="hoc">
        <h4>렌더유형</h4>
        <div className="title">1. 일반적인 render 유형</div>
        <div className="title">2. 합성 컴포넌트 패턴</div>
        <div className="content">
          - snackbar처럼 여러개의 컴포넌트를 포함하여 순서가 바뀔 경우
          <Dialog>
            <Dialog.Content>컨텐츠?</Dialog.Content>
            <Dialog.Title>타이틀?</Dialog.Title>
          </Dialog>
        </div>
        합성은 단순히 object assign 하면 되어서 끝
        <hr />
        <h4>상태관리</h4>
        <div className="title">1. 제어 컴포넌트 - 일반적인 유형</div>
        <div className="title">2. 리듀서 패턴</div>
      </div>
      <div>
        규모를 크게 잡은 card라는 컴포넌트가 있다면. 내부의 이미지, 텍스트등의
        렌더는 어떻게 넘겨주는것이 좋을까?
      </div>
    </div>
  );
};

export default Pattern;

import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import classNames from "classnames";
import "./utilToolkit.scss";

const UtilToolkit = () => {
  const [editMode, setEditMode] = useState(false);
  const [position, setPosition] = useState({ x: 887, y: 946 });

  const [on, setOn] = useState("off");

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const toggleEditMode = () => {
    // e.stopPropagation()
    if (editMode === false) {
      setEditMode(true);
      document.designMode = "on";
      // document.body.style.pointerEvents = "none";
    } else {
      setEditMode(false);
      document.designMode = "off";
      // document.body.style.pointerEvents = "";
    }
  };

  // useEffect(() => {
    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);

    var keys = [];

    function keysPressed(e) {
      keys[e.keyCode] = true;
      if (keys[16] && keys[112]) {
        console.log("Shift + F1");
        e.preventDefault();
        setOn("on");
      }
      if (keys[16] && keys[113]) {
        console.log("Shift + f2");
        e.preventDefault();
        setOn("off");
      }
    }

    function keysReleased(e) {
      keys[e.keyCode] = false;
    }
  // }, []);

  // TODO: 편집모드 일시 body에 pointer-event none 넣기, 편집모드 창에 hover 시 body에 넣은 pointer-event none 제거

  return (
    <div>
      {(window.location.href.includes(":3000/") ||
        window.location.href.includes("-dev")) &&
        on === "on" && (
          <Draggable onDrag={(e, data) => trackPos(data)}>
            <div
              className={classNames("tool-kit", { "is-none-event": editMode })}
            >
              <button
                className={classNames("editmode", { "is-edit": editMode })}
                onClick={() => toggleEditMode()}
              >
                수정모드 : {editMode ? "ON" : "OFF"}
              </button>
              <div className="list-style-none">
                <div className="sub-title">
                  {/* <a href="#/component">- 컴포넌트 페이지</a> */}
                </div>
                <ul>
                  <li>
                    <a href="http://localhost:3000/#/component">
                      - 컴포넌트 페이지
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/#/popup">- 팝업 페이지</a>
                  </li>
                </ul>
                <h4>추가될 기능</h4>
                <dl>
                  <dt>
                    <strong>칼라</strong>
                  </dt>
                  <dd>
                    <p>
                      화면에 보이는 부분을 스포이드로 찍어서 rgba값을
                      알아내거나, rgba을 입력하고 uitoolki을 이동하여 색상 비교
                      <br/>
                      https://codepen.io/urosurosevic/pen/pagxYE
                    </p>
                  </dd>
                  <dt>
                    <strong>새로고침 버튼 넣기</strong>
                  </dt>
                  <dd>f5눌러서 새로고침이 귀찮을수있으니 버튼 넣어두기..</dd>
                </dl>
              </div>
            </div>
          </Draggable>
        )}
    </div>
  );
};

export default UtilToolkit;

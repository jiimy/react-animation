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

  useEffect(() => {
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
  }, []);

  // TODO: 편집모드 일시 body에 pointer-event none 넣기, 편집모드 창에 hover 시 body에 넣은 pointer-event none 제거

  return (
    <div>
      <div>
        <button onClick={() => setOn(!on)}>테스트</button>
      </div>
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
                  <a href="http://localhost:3000/#/component">
                    - 컴포넌트 페이지
                  </a>
                  <a href="http://localhost:3000/#/popup">- 팝업 페이지</a>
                </div>
              </div>
            </div>
          </Draggable>
        )}
    </div>
  );
};

export default UtilToolkit;

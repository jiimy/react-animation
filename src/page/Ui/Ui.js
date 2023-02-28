import React from "react";
import { useState } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import Sheet from "../../components/sheet/Sheet";
import SnackbarWrap from "../../components/snackbar/SnackbarWrap";
import TimerProgress from "../../components/timerProgress/TimerProgress";
import Toast from "../../components/toast/Toast";
import ToastItem from "../../components/toast/ToastItem";

const Ui = () => {
  const [toggleSheet, setTogglesheet] = useState(false);
  const [toggleProgress, setToggleProgress] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const clickToggleSheet = (state) => {
    setTogglesheet(state);
  };
  const sheetClose = () => {
    setTogglesheet(false);
  };

  const clickToggleProgress = (state) => {
    setToggleProgress(state);
  };
  const progressClose = () => {
    setToggleProgress(false);
  };

  const sendToast = () => {
    setOpenToast(false);
  };

  const [countList, setCountList] = useState([0]);

  const showToast = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter = counter + 1;
    countArr.push(counter); // index 사용 X
    setTimeout(() => {
      countArr.shift();
      console.log("zz", countArr);
    }, 1000);
    setCountList(countArr);
  };

  const removeDiv = (value) => {
    console.log("빠짐");
    console.log("aa", countList, value);
  };

  return (
    <div>
      <h3>sheet</h3>
      <p>
        밑에서 위로 올라오는 레이아웃이며, 다양한 content가 들어갈 수 있습니다.
      </p>

      <button onClick={() => clickToggleSheet(true)}>sheet 열기</button>
      <button onClick={() => clickToggleSheet(false)}>sheet 닫기</button>

      <h3>toast 보류 - react-toastify 로 대체</h3>
      <p>
        위나 아래로부터 '이벤트 발동시 마다' 나올 수 있고, '사용자의 기능없이
        자동으로 없어집니다.'{" "}
      </p>

      <button onClick={showToast} removeDiv={removeDiv}>
        toast 열기
      </button>

      <h3>snackbar</h3>
      <p>위나 아래로부터 나오고, '자동이거나 수동으로 없어집니다'</p>
      <SnackbarWrap />

      <h3>motionlayer</h3>
      <p>모달 및 팝업을 감싸는 모션만 담당하는 레이어 입니다.</p>

      <button>motionlayer 열기</button>
      <button>motionlayer 닫기</button>

      <h3>타이머 프로그레스</h3>
      <p>시작, 종료를 가진 타이머처럼 진행되는 프로그레스</p>
      <button onClick={() => clickToggleProgress(true)}>
        timer progress 시작
      </button>

      <hr />
      {/* 실제 컴포넌트들 */}
      <Sheet show={toggleSheet} sheetClose={sheetClose}>
        시트
      </Sheet>

      <TimerProgress open={toggleProgress} />
    </div>
  );
};

export default Ui;

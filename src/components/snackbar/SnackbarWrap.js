import React, { useState, useRef, useEffect } from "react";
import Snackbar from "./Snackbar";
import useScreenSize from "../../hooks/useCssVar";
import "./snackbar.scss";

const SnackbarWrap = () => {
  const wrapRef = useRef();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(wrapRef?.current?.clientHeight);
  }, [wrapRef?.current?.clientHeight]);
  useScreenSize(`${height}px`, "--snackbar");

  return (
    <>
      <button
        onClick={() => {
          setOpen1(true);
        }}
      >
        snackbar1 열기
      </button>
      <button
        onClick={() => {
          setOpen1(false);
        }}
      >
        snackbar1 닫기
      </button>
      <button
        onClick={() => {
          setOpen2(true);
        }}
      >
        snackbar2 열기
      </button>
      <button
        onClick={() => {
          setOpen2(false);
        }}
      >
        snackbar2 닫기
      </button>
      <div className="snackbar-wrap" ref={wrapRef}>
        <Snackbar open={open1}>스낵바1</Snackbar>
        <Snackbar open={open2}>스낵바2</Snackbar>
      </div>
    </>
  );
};

export default SnackbarWrap;

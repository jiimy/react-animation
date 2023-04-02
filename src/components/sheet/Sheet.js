import React, { useRef, useEffect, useState } from 'react';
import './sheet.scss';
import classnames from 'classnames';

const Sheet = ({ show, children, sheetClose}) => {
  const childrenRef = useRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function setScreenSize() {
      const shettHeight = childrenRef.current.clientHeight;
      document.documentElement.style.setProperty('--shettHeight', `${shettHeight}px`);
    }
    setScreenSize();
    window.addEventListener('resize', () => setScreenSize());
    return () => window.addEventListener("resize", () => setScreenSize());
  }, [childrenRef])

  useEffect(() => {
    setToggle(show);
  }, [show])

  const toggleSheet = () => {
    setToggle(false);
  }

  return (
    <div className={classnames('sheet', { 'is-on': toggle })} ref={childrenRef}>
      <div className="close-btn" onClick={() => {
        toggleSheet();
        sheetClose(false);
      }}>닫기</div>
      {children}
    </div>
  );
};

export default Sheet;
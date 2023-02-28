import React, { useState } from "react";
import cn from 'classnames';
import "./snackbar.scss";

const Snackbar = ({ children, open, close }) => {
  return (
    <>
      <div className={cn("snackbar", open ? 'is-show' : '')}>
        {children}
        {close && <div className="close">닫기</div>}
      </div>
    </>
  );
};

export default Snackbar;

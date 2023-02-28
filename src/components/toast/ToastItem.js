import React, { useEffect, useState } from 'react';
// import './toast.scss';

const ToastItem = ({ children, open, close, sendToast }) => {
  return (
    <>
      {open &&
        <div className='toast-item'>
          {children}
          {close && <div className='close'>닫기</div>}
        </div>
      }
    </>
  );
};

export default ToastItem;
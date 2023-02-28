import React, { useRef, useEffect, useState } from 'react';
import s from './toast.module.scss';
import styled from 'styled-components';
import ToastItem from './ToastItem';
import classNames from 'classnames';

const TT = styled.div`
  border: 1px solid blue;
`

const Toast = ({ delay, direction, children, timer = 1, countList, removeDiv, className }) => {
  const divRef = useRef();
  const [sendList, setSendList] = useState();
  const [test ,setTest] = useState();

  useEffect(() => {
    console.log('qq', countList)
    setSendList(countList);
  }, [countList])

  return (
    <div className={classNames([s.toast], className)}>
      {children}
    </div>
  );
};

export default Toast;



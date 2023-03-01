import React, { useState, useEffect } from "react";
import cn from "classnames";
import styled from "styled-components";
import useScreenSize from "../../hooks/useCssVar";
import "./timerprogress.scss";

function loopRender(i, count) {
  let second = i / count;
  return `
		&:nth-child(${i + 1}) {
      background: #ccc;
      transition-delay: ${second}s;
    }
	`;
}

function arrayloop(props) {
  let str = "";
  for (let index = 0; index < props.count; index++) {
    str += loopRender(index, props.count);
  }
  return str;
};

const ProgressWrap = styled.div`
  &.is-on {
    .timer-progress-item {
      ${(props) => arrayloop(props)};
    }
  }
`;

const TimerProgress = ({ open = false, timer = 1, count = 10 }) => {
  const [getOpen, setGetOpen] = useState(false);

  // ① scss로 했을 경우
  useScreenSize(count, "--progressCount");
  useScreenSize(timer, "--progressTimer");
  useEffect(() => {
    setGetOpen(open);
  }, [open, timer]);

  return (
    <ProgressWrap
      className={cn("timer-progress", { "is-on": getOpen })}
      count={count}
      timer={timer}
    >
      {[...Array(parseInt(count))].map((n, index) => (
        <div
          className="timer-progress-item"
          data-time={index + 1}
          key={index}
        ></div>
      ))}
    </ProgressWrap>
  );
};

export default TimerProgress;

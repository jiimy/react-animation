import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ContainerQuery = ({ children, classname, size, style }) => {
  const domRef = useRef();
  const [width, setWidth] = useState();

  // TODO: 스크린사이즈 임시방편
  useEffect(() => {
    function setScreenSize() {
      const domWidth = domRef.current.clientWidth;
      setWidth(domWidth);
      document.documentElement.style.setProperty(
        `--${classname}`,
        `${domWidth}px`
      );
    }
    setScreenSize();
    window.addEventListener("resize", () => setScreenSize());
    return () => window.addEventListener("resize", () => setScreenSize());
  }, [domRef, classname]);

  const ChildDiv = styled.div`
    ${width <= size ? style : null}
  `

  return (
    <div className={classname} ref={domRef}>
      <ChildDiv>{children}</ChildDiv>
    </div>
  );
};

export default ContainerQuery;

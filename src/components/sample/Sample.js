import styled, { keyframes } from "styled-components";

// 총 갯수 * 1초 = 3초. 1초씩 딜레이
const generateKeyframes = (count) => {
  let keyframesCss = "";
  for (let i = 0; i <= count; i++) {
    keyframesCss += `
      0% {
      opacity: 0;
      }
      100% {
      opacity: 1;
      }
    `;
  }

  return keyframes`${keyframesCss}`;
};

const AnimatedComponent = styled.div`
  animation: ${({ count }) => generateKeyframes(count)} ${() => a.length + "s"} linear infinite
    ${({ count }) => count + "s"};
`;

const a = ["a", "b", "c"];

const Sample = () => {
  return (
    <div className="sample-wrap">
      {a.map((item, index) => (
        <AnimatedComponent count={index} key={index}>
          {item}
        </AnimatedComponent>
      ))}
    </div>
  );
};

export default Sample;

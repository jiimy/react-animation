import classNames from "classnames";
import s from './animationTimeline.module.scss';
import './animationTimelineTest.scss'

const AnimationTimeline = ({ children, className }) => {
  return (
    <div className={classNames('', className)}>
      {children}
      <div className={s.stretcher}></div>
    </div>
  );
};

export default AnimationTimeline;

// 예시 children <div className="animationTimelineTest">블라블라</div>
import classNames from 'classnames';
import React, { useEffect } from 'react';

const StackBtn = () => {
  const [stack, setStack] = React.useState([]);

  const buttenClick = (target) => {
    console.log('dd', target);
    if (stack.length > 1 && stack[stack.length - 1] === target) {
      // If the last item in the stack is the same as the target, remove it
      setStack((prev) => prev.slice(0, -1));
      return;
    } else {
      setStack((prev) => [...prev, target]);
    }
  };

  useEffect(() => {
    console.log('stack', stack);
  }, [stack]);

  return (
    <div>
      <button
        className={classNames('', {
          is_active: stack.length > 0 && stack[stack.length - 1] === '1번',
        })}
        onClick={() => buttenClick('1번')}
      >
        1번
      </button>
      <button
        className={classNames('', {
          is_active: stack.length > 0 && stack[stack.length - 1] === '2번',
        })}
        onClick={() => buttenClick('2번')}
      >
        2번
      </button>
      <button
        className={classNames('', {
          is_active: stack.length > 0 && stack[stack.length - 1] === '3번',
        })}
        onClick={() => buttenClick('3번')}
      >
        3번
      </button>
    </div>
  );
};

export default StackBtn;

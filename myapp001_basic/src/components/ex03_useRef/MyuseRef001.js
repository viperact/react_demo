import { useRef, useState } from 'react';

const MyuseRef001 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const upCountState = () => {
    setCount(count + 1);
  };

  const upCountRef = () => {
    //값은 변경이되지만 화면에 출력되지 않는다 (렌더링되지 않는다)
    console.log((countRef.current = countRef.current + 1));
  };
  return (
    <div>
      <p>State:{count}</p>
      <p>Ref:{countRef.current}</p>
      <p>Let:{countLet}</p>

      <button onClick={upCountState}>State</button>
      <button onClick={upCountRef}>Ref</button>
    </div>
  );
};

export default MyuseRef001;

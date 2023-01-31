import { useState } from 'react';

/*
    React는 state가 변경이 될때마다 렌더링이 발생한다.
    React 렌더링이 발생되면 배치로 해서 처리한다.
    배치 16ms 단위로 처리한다.
    useState()는 비동기화로 처리한다.
*/

const MyuseStatesync002 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    // 비동기화 처리 (setNumber)
    // 한번 UP 클릭할때마다 3씩 처리 (callback함수 이용)
    // state의 값을 순차적으로 변경할때 콜백함수를 사용한다.
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  };

  const handleDownNumber = () => {
    //한번 DOWN 클릭할때마다 3씩 처리
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync002;

import { useState } from 'react';

const MyuseState002 = () => {
  //const [상태, 상태변경함수] = useState(초기값)

  const [cnt, setCnt] = useState(0);
  const handleClick = (e) => {
    e.preventDefault(); //새롭게 창이 이동하거나 실행되는것을 막아줌
    setCnt(cnt + 1);
  };

  return (
    <div>
      <p>
        cnt: <span>{cnt}</span>
      </p>
      <button onClick={handleClick}>CNT UPDATE</button>
    </div>
  );
};

export default MyuseState002;

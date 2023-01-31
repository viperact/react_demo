import { useEffect, useState } from 'react';

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0); //useState로 초기값 설정

  const handleData = (e) => {
    console.log((data = data + 1));
  };

  const handleName = (e) => {
    // setNum(e.target.value + 1); // 11
    // setNum(parseInt(e.target.value) + 1); // 2
    setNum(num + 1); //state 값은 변경되었지만 참조하는게 없어 출력값이 없다.
  };

  //일반 변수를 넣으면 대괄호 공백과 같다 [data] = []
  useEffect(() => {
    console.log('data:' + data);
  }, []);

  useEffect(() => {
    console.log('num:' + num);
  }, [num]);

  return (
    <div>
      <input type='text' placeholder='data' onChange={handleData} />
      <input type='text' placeholder='num' onChange={handleName} />
      <button>등록</button>
    </div>
  );
};

export default MyuseEffect002;

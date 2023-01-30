import { useState } from 'react';

const MyuseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    setNames([...names, input]); // ...names 는 useState값을 복사해서 넣어줌, append의 의미로 사용
    setInput('');
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* {names.map((value, index) => (
        //.map으로 중괄호표시를 해주면 return 키워드를 꼭 써야한다.
        // return 키워드를 쓰지않으면 중괄호를 소괄호로 바꿔주면된다.
        <p key={index}>{value}</p>
      ))} */}

      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};

export default MyuseState003;

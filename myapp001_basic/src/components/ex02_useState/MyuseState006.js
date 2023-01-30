import { useRef, useState } from 'react';

// useRef, useState
const MyuseState006 = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');
  const [userList, setUserList] = useState([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const pushNewUser = () => {
    // 위에서 배열 안 객체 형태로 선언했기에, 아래에서도 배열설정[]을 해줘야함
    // setUserList([...userList, { id: userList.length + 1, name: input }]);
    // setInput('');

    // inputRef는 바로 value값을 가져오지 못해 current를 통해 value를 가져와야한다.
    // input은 바로 value값을 가져올 수 있다.
    console.log(inputRef);
    setUserList([
      ...userList,
      { id: userList.length + 1, name: inputRef.current.value },
    ]);
  };

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
        style={{ display: 'block' }}
        id='fname'
        value={input}
        onChange={handleChange}
      />

      <button onClick={pushNewUser} style={{ display: 'block' }}>
        등록
      </button>

      {userList.map((element, idx) => {
        return (
          <p key={idx}>
            <span>{element.id}</span>
            <span>{element.name}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MyuseState006;

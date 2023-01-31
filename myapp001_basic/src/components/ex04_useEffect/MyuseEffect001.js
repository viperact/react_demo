import { useEffect, useState } from 'react';
/*
  useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
  특정작업(side effect) : Time(setTimeout), Ajax
  useEffect: useEffect는 side effect라는 뜻이다.
  useEffect 4가지 종류
  1. useEffect(callback) : 마운트 후, 리렌더링 될때마다
  2. useEffect(callback,[]) : 마운트 후 딱 한번만 수행
  3. useEffect(callback, [state]) : 마운트 후, state값이 변경이 될때만 수행
  4. useEffect(callback() { return();}, []) : 마운트 후, 언마운트 전(현재 컴포넌트가 종료되기 전에 수행)
*/

const MyuseEffect001 = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  // 콜백함수, 대괄호 x  : 마운트 후, 리렌더링 될때마다
  useEffect(() => {
    console.log('렌더링이 되었습니다.');
  });

  useEffect(() => {
    console.log('렌더링 Name:' + name);
  }, [name]);

  useEffect(() => {
    console.log('렌더링 NickName:' + nickname);
  }, [nickname]);

  useEffect(() => {
    console.log('렌더링 name: ' + name + ', NickName: ' + nickname);
  }, [name, nickname]);

  // name의 값이 state 되기전에 clean up을 수행한다
  useEffect(() => {
    console.log('렌더링 return: ' + name);
    return () => {
      console.log('clean up');
    };
  }, [name]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={name}
          onChange={onChangeName}
          placeholder='name'
        />

        <input
          type='text'
          value={nickname}
          onChange={onChangeNickName}
          placeholder='nickname'
        />
      </div>

      <div>
        <b>이름:</b> {name}
      </div>

      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default MyuseEffect001;

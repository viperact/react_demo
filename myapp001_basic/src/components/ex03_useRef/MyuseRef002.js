import { useEffect, useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    nameRef.current.value = '';
  };

  // 모든 리렌더링이 완료 된 후 실행되는 useEffect()
  // 특정 input에 포커스 주기
  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;

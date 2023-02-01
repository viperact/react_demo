import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';

// context는 상태관리를 하진않는다.
// 단순히 부모 컨포넌트에 생성된 자원을 다시 컨포넌트에서 직접적으로 사용할 수 있도록 연결하는 역할을한다.
// 상태관리는 useState, Redux가 지원한다.
const Input = () => {
  const { input, insertTodo, handleChangeText } = useContext(InputContext);

  return (
    <form onSubmit={insertTodo}>
      <input
        type='text'
        required={true}
        value={input}
        onChange={handleChangeText}
      />
      <input type='submit' value='Create' />
    </form>
  );
};

export default Input;

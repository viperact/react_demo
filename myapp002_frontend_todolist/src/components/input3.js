import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const insertTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'INSERT', todoname: input });
    setInput(''); // 입력란 초기화
  };

  const handleChangeText = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

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

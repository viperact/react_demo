import './App.css';
import React, { useEffect, useState } from 'react';

import Input from './components/input1';
import Todo from './components/todo1';

//상태전달 : props
function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  let boardList = [
    { id: 1, todoname: '운동하기', completed: 0 },
    { id: 2, todoname: 'SNS꾸미기', completed: 0 },
    { id: 3, todoname: '사진정리하기', completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      { id: todos.length + 1, todoname: input, completed: 0 },
      ...todos,
    ]);

    setInput(''); // 입력란 초기화
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id; //처리하는부분이 하나일땐 {return} 생략가능
      })
    );
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  // JSX로 사용하는 부분
  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST 1</h1>
      <Input
        input={input}
        insertTodo={insertTodo}
        handleChangeText={handleChangeText}
      />

      <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

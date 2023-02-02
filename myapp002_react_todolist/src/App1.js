import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './commonApi/todoApi';
import Input from './components/input1';
import Todo from './components/todo1';

function App() {
  const wrap = {
    width: '500px',
    border: '1px solid black',
    margin: '10px auto',
  };

  // const baseUrl = 'http://localhost:8090'; // 주석하고 임포트하면 일일이 바꿀필요없다.

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []);

  // async : 비동기화 처리
  async function getTodos() {
    //db접근해 데이터를 가져오는 작업
    await axios // await
      .get(baseUrl + '/todo/all') // 요청할 url
      .then((response) => {
        // console.log(response.data);
        console.log('111111111111111111111');
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('ww222222222222222');
  }

  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post(baseUrl + '/todo', { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput('');
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('할일이 추가됨!');
  };

  const updateTodo = async (id, completed) => {
    await axios
      .put(baseUrl + '/todo/' + id + '/' + completed)
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
              : todo
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + '/todo/' + id)
      .then((response) => {
        // setTodos(todos.filter((todo) => todo.id !== id));
        setTodos(
          todos.filter((todo) => {
            return todo.id !== id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('input:' + input);
  }, [input]);

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  // JSX로 사용하는 부분
  return (
    <div className='App' style={wrap}>
      <h1>TODO LIST 1(props)</h1>
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

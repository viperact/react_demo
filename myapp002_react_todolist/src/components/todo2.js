import { Fragment, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Label from './label2';

const Todo = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              // list를 출력할때는 각 값의 고유한 값을 줘야한다
              <div className='todo' key={todo.id}>
                <Label todo={todo} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;

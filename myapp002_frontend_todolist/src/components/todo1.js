import { Fragment } from 'react';
import Label from './label1';

const Todo = (props) => {
  const { todos, updateTodo, deleteTodo } = props;

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              // list를 출력할때는 각 값의 고유한 값을 줘야한다
              <div className='todo' key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo;

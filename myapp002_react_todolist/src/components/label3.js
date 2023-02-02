const Label = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <h3>
      <label
        className={todo.completed ? 'completed' : null}
        onClick={updateTodo} // 이벤트처리
      >
        {todo.todoname}
      </label>

      <label onClick={deleteTodo}>&nbsp;&nbsp;삭제</label>
    </h3>
  );
};

export default Label;

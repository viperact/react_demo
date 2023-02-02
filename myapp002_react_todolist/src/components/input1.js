const Input = (props) => {
  const { input, insertTodo, handleChangeText } = props; // 값이 넘어가는게 아니라 주소가 넘어간다.

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

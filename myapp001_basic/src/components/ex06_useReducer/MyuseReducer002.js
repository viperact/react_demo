import { useReducer, useState } from 'react';

// reducer 처리
function reducer(state, action) {
  switch (action.check) {
    case 'name':
      return { name: action.type }; // {} 중괄호는 이름 : 값 형식
    case 'nickName':
      return { nickName: action.type }; // {} 중괄호는 이름 : 값 형식

    default:
      return { state }; // state :  { name: '', nickName: '' }
  }
}

const MyuseReducer002 = () => {
  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickName = (e) => {
  //     setNickname(e.target.value);
  //   };

  const [state, dispatch] = useReducer(reducer, { name: '', nickName: '' });
  const { name, nickName } = state; // div 쪽에 state.name, state.nickName 에 state를 빼기위해 구조분해할당을 해줌

  const onChange = (e) => {
    dispatch({ check: e.target.name, type: e.target.value }); // action이 받는것
  };
  return (
    <div>
      <div>
        <input
          type='text'
          name='name'
          placeholder='name'
          //   onChange={onChangeName}
          onChange={onChange}
        />
        <input
          type='text'
          name='nickName'
          placeholder='nickName'
          //   onChange={onChangeNickName}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>

      <div>
        <b>닉네임:</b>
        {nickName}
      </div>
    </div>
  );
};

export default MyuseReducer002;

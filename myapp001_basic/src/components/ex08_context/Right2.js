import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { UserContext } from './contexts/UserContext';
import Right3 from './Right3';

// useContext는 하나의 값만 넣을 수 있다.
// const {name, number} = useContext(UserContext, ThemeContext) = X
const Rigth2 = () => {
  const { name } = useContext(UserContext);
  const { number } = useContext(ThemeContext);

  return (
    <div>
      <h1>Rigth2 : </h1>
      <h1>Name: {name}</h1>
      <h1>Number: {number}</h1>
      <Right3 />
    </div>
  );
};

export default Rigth2;

const name = 'react';
const age = undefined;

const MyJsx005 = () => {
  return (
    <div>
      {/* 출력결과 <p></p> */}
      <p>{name === 'REACT' ? name : null}</p>

      {/* {출력결과 <p></p>} */}
      <p>{age}</p>
    </div>
  );
};

export default MyJsx005;

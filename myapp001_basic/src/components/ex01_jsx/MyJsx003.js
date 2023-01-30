import './MyJsx3.css';

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  // html과 사용하는 속성이 다르다
  // class 대신 className
  // JSX 에서 JavaScript 문법을 사용할 수 있다 (사용시엔 {} 중괄호 사용)
  return (
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className='line'>Line Test</div>
    </>
  );
};

export default MyJsx003;

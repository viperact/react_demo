import React, { Fragment } from 'react';

const MyJsx002 = () => {
  return (
    // 의미없이 묶어줄때는 Fragment
    // div로 묶어주면 페이지소스에서 div가 남지만, Fragment는 추가되지않음
    // <Fragment>와 <></>는 기능이 똑같다
    //<Fragment>
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    //</Fragment>
  );
};

export default MyJsx002; //외부에서 사용 가능하게 만들어줌

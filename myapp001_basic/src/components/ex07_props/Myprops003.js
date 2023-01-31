// 기본값을 지정해도 부모요소에서 지정한 값으로 넘어온다
const Myprops003 = ({ name = '아무개', age = 10, loc = '서울' }) => {
  return (
    <div>
      <p>
        고객님 이름 : {name} 나이 : {age} 지역 : {loc}
      </p>
    </div>
  );
};

export default Myprops003;

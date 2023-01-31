// 여러개의 값을 가져올때
const Myprops002 = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        고객님 이름 : {props.name} 나이 : {props.age} 지역 : {props.loc}
      </p>
    </div>
  );
};

export default Myprops002;

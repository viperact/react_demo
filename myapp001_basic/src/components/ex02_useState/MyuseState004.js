import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustommer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-0000-0000',
  });

  const handleName = (e) => {
    setCustommer({ ...customer, name: e.target.value });

    // setCustommer((prevState) => {
    //   return { ...prevState, name: e.target.value };
    // });
  };

  // update가 이루어지는 로직, 기존에 있는것 복사, 새로 고칠것
  const handleAddress = (e) => {
    setCustommer({ ...customer, address: e.target.value });
  };

  const handlePhone = (e) => {
    setCustommer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    console.log(`${customer.name} ${customer.address} ${customer.phone}`);
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button onClick={handleCommit}>확인</button>
    </div>
  );
};

export default MyuseState004;

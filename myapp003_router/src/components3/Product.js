import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/*
 [1] useNavigate()
   - Link컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 경우, 이전/다음등에 사용되는 Hook이다.
   - replace옵션을 사용하면 페이지를 이동할때 히스토리를 남기지 않는다.
    기본은 {replace:false} 이므로 히스토리를 남긴다.


*/

const Product = () => {
  const productId = useParams().productId;
  const navigate = useNavigate();
  return (
    <div>
      <h3>{productId}번 상품페이지입니다.</h3>
      <ul>
        <li>
          <button onClick={() => navigate(-2)}> Go 2 pages back </button>
        </li>
        <li>
          <button onClick={() => navigate(-1)}> Go 1 pages back </button>
        </li>
        <li>
          <button onClick={() => navigate(1)}> Go 1 pages forward </button>
        </li>
        <li>
          <button onClick={() => navigate(2)}> Go 2 pages forward </button>
        </li>
        <li>
          <button onClick={() => navigate('/')}> Go Root </button>
        </li>
        <li>
          <button onClick={() => navigate('/', { replace: true })}>
            {' '}
            Go Root{' '}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Product;

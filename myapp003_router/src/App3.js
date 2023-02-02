import { Route, Routes } from 'react-router-dom';
import About from './components3/About';
import Dashboard from './components3/Dashboard';
import Home from './components3/Home';
import Layout from './components3/Layout';
import Main from './components3/Main';
import NoMatch from './components3/NoMatch';
import Product from './components3/Product';

/*
[1] 페이지 주소를 설정할때  유동적인 값 설정
  (1) URL 파라미터 : /product/1
  (2) 쿼리스트링 :  /product?page=1&keyword=react

[2] URL 파라미터
   - <Link to='/product/1'>1번상품</Link>
   - <Route path='product/:productId' element={<Product />} />
   - Product 컴포넌트 (useParams().파라미터명 )
     const productId = useParams().productId;

 [3] 쿼리스트링
  - 쿼리스트링을 사용할때는 URL파라미터 처럼 Route컴포넌트를 사용할 때 별도로 설정하는 것이 없다.
 -  요청 http://localhost:3000/dashboard?page=3&keyword=data
  - Dashboard 컴포넌트
     const location = useLocation();
     {location.search}
  - location객체
     hash : 주소의 #문자열 뒤의 값  
     pathname : 현재 주소 경로       
     search : ?를 포함한 쿼리스트링  
     state : 페이지로 이동시 임의로 넣을 수 있는 상태 값 
     key : location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때 마다 고유의 값이 생성됨.

     
*/

// v6
// npm install react-router-dom
// <Link to = '/'> = <a href = '/'> Link to는 a태그와같이 링크처리를 해준다
const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='main' element={<Main />} />
          <Route path='product/:productId' element={<Product />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

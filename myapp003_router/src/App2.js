import { Route, Routes } from 'react-router-dom';
import About from './components1/About';
import Dashboard from './components3/Dashboard';
import Home from './components3/Home';
import Layout from './components3/Layout';
import NoMatch from './components3/NoMatch';

// v6
// npm install react-router-dom
// <Link to = '/'> = <a href = '/'> Link to는 a태그와같이 링크처리를 해준다
const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      {/*
            
            */}

      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}

        {/*
            path값이 같다면 index로 잡아준다.
        */}

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

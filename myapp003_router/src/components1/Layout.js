import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            {/* <a>요소는 전체를 모드 렌더링하므로 <Link> 또는 <NavLink>를 사용한다. */}
            {/* <a href='/dashboard'>Dashboard</a> */}
            <Link to='/dashboard'>Dashboard</Link>
          </li>

          <li>
            <Link to='/nothing-here'>Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

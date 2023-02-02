import { Link, NavLink, Outlet } from 'react-router-dom';

const activeStyle = ({ isActive }) => ({
  color: isActive ? 'green' : '',
  fontsize: isActive ? '2rem' : '',
});

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' style={activeStyle}>
              Home
            </NavLink>
          </li>

          <li>
            {/* 
                선택한 컴포넌트에 스타일 지정이 가능하다.
                Link는 적용되지 않는다. NavLink 사용
            */}
            <NavLink to='/dashboard' style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to='/nothing-here' style={activeStyle}>
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

import { useLocation } from 'react-router-dom';

//http://localhost:3000/dashboard?page=3&keyword=data
//{pathname, search, hash, state, key}

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>쿼리스트링</p>
      <ul>
        <li>hash : {location.hash}</li>
        <li>pathname : {location.pathname}</li>
        <li>search : {location.search}</li>
        <li>state : {location.state}</li>
        <li>key : {location.key}</li>
        {/* 
        hash:
        pathname: /dashboard
        search : ?page=3&keyword=data
        state:
        key: default 
        */}
      </ul>
    </div>
  );
};

export default Dashboard;

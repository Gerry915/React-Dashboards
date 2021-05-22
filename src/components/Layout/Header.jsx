import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard-one">Banking Dashboard</Link>
        </li>
        <li>
          <a href="/fleet-management">Fleet Management</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

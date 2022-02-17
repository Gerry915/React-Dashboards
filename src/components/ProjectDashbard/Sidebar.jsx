import history from "../../icons/history.svg";
import "../../style/ProjectDashboard/sidebar.scss";
import { Sidebaritem } from "./SidebarItem";

export const Sidebar = ({ items, selector }) => {
  return (
    <div className="sidebar-wrapper">
      <header>
        <h4>Virtual Dashboard</h4>
      </header>
      <ul>
        {items.map((item) => (
          <li key={`${item.id}-${item.name}`}>
            <Sidebaritem item={item} selector={selector} />
          </li>
        ))}
      </ul>
      <div className="bottom-card">
        <div className="header-wrapper">
          <img src={history} alt="history" width={38} />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </a>
        </div>
        <h4>History available</h4>
        <p>Check your weekly transaction reports</p>
      </div>
    </div>
  );
};

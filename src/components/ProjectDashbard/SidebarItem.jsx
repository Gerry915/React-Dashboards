import "../../style/ProjectDashboard/sidebar.scss";
import Dashboard from '../../icons/dashboard.svg';
import { Badge } from "./Modules/Badge";

export const Sidebaritem = ({ item, selector }) => {

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={() => {selector(item.id)}}>
        <div className="sidebar-item">
          <img src={Dashboard} alt="dashboard" />
          <p>{item.name}</p>
          {
            item.notification && <Badge notificationCount={item.notification} />
          }
        </div>
      </a>
    </>
  );
};

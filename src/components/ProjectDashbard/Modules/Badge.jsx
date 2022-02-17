import "../../../style/ProjectDashboard/sidebar.scss";

export const Badge = ({ notificationCount }) => {
  const render = () => {
    if (notificationCount > 100) {
      return <p>99+</p>;
    } else if (notificationCount > 0 && notificationCount < 100) {
      return <p>{notificationCount}</p>;
    } else {
      return <></>;
    }
  };

  return <div className="notification-badge">{render()}</div>;
};

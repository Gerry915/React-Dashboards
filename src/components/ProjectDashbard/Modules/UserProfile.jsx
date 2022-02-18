import "../../../style/ProjectDashboard/projectDash.scss";

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <img
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80"
        alt="avatar"
        height={56}
        width={56}
      />
      <div className="user-info">
        <h4>Gerry Gao</h4>
        <p>Developer</p>
      </div>
    </div>
  );
};

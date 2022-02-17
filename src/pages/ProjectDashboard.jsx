import { Analytics } from "components/ProjectDashbard/Sections/Analytics";
import { Dashboard } from "components/ProjectDashbard/Sections/Dashboard";
import { Integrations } from "components/ProjectDashbard/Sections/Integrations";
import { Messages } from "components/ProjectDashbard/Sections/Messages";
import { Profile } from "components/ProjectDashbard/Sections/Profile";
import { Settings } from "components/ProjectDashbard/Sections/Settings";
import { Utilities } from "components/ProjectDashbard/Sections/Utilities";
import { Sidebar } from "components/ProjectDashbard/Sidebar";
import { useState } from "react";
import "../style/ProjectDashboard/projectDash.scss";

const listItem = [
  {
    id: 0,
    name: "Dashboard",
  },
  {
    id: 1,
    name: "Profile",
  },
  {
    id: 2,
    name: "Utilities",
  },
  {
    id: 3,
    name: "Settings",
    notification: 2,
  },
  {
    id: 4,
    name: "Messages",
    notification: 102,
  },
  {
    id: 5,
    name: "Analytics",
  },
  {
    id: 6,
    name: "Integrations",
    notification: 2,
  },
];

const ProjectDashboard = () => {
  const [view, setView] = useState(0);

  const selector = (id) => {
    setView(id);
  };

  const renderMain = () => {
    switch (view) {
      case 0:
        return <Dashboard />;
      case 1:
        return <Profile />;
      case 2:
        return <Utilities />;
      case 3:
        return <Settings />;
      case 4:
        return <Messages />;
      case 5:
        return <Analytics />;
      case 6:
        return <Integrations />;
      default:
        break;
    }
  };

  return (
    <div className="project-dash">
      <div className="dash-wrapper">
        <Sidebar items={listItem} selector={selector} />
        <main>{renderMain()}</main>
      </div>
    </div>
  );
};

export default ProjectDashboard;

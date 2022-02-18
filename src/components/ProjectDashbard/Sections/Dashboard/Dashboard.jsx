import { useEffect } from "react";
import { Summary } from "./Modules/Summary/Summary";
import "../../../../style/ProjectDashboard/projectDash.scss"
import { ProfileGrowth } from "./Modules/ProfileGrowth/ProfileGrowth";

export const Dashboard = () => {

  useEffect(() => {
    
    return () => {
      console.log('component unmounted')
    };
  }, []);

  return (
    <div className="dashboard-main">
      <div className="dashboard-main__content">
        <Summary />
        <ProfileGrowth />
      </div>
      <div className="dashboard-main__side">
        <p>sidebar</p>
      </div>
    </div>
  )
}
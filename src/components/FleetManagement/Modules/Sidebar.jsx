import styles from "style/FleetManagement/FleetMain.module.scss";

import dashboardIcn from "icons/FleetManagement/dashboard.svg";
import pieChartIcn from "icons/FleetManagement/pie-chart.svg";
import boxIcn from "icons/FleetManagement/box.svg";
import truckIcn from "icons/FleetManagement/delivery-truck.svg";
import mapIcn from "icons/FleetManagement/map.svg";
import seetingsIcn from "icons/FleetManagement/settings.svg";

const Sidebar = () => {
  return (
    <div className={styles["side-bar"]}>
      <ul>
        <li>
          <div
            className={styles["icn"]}
            style={{
              background: `url(${dashboardIcn})`,
              backgroundSize: "65% 65%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
          dashboard
          <div className={styles["open-arrow"]}></div>
        </li>
        <li>
          <div
            className={styles["icn"]}
            style={{
              background: `url(${pieChartIcn})`,
              backgroundSize: "65% 65%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
          analytics
          <div className={styles["open-arrow"]}></div>
        </li>
        <li>
          <div
            className={styles["icn"]}
            style={{
              background: `url(${truckIcn})`,
              backgroundSize: "65% 65%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
          Vehicles
          <div className={styles["open-arrow"]}></div>
        </li>
        <li>
          {" "}
          <div
            className={styles["icn"]}
            style={{
              background: `url(${mapIcn})`,
              backgroundSize: "65% 65%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
          Trips
          <div className={styles["open-arrow"]}></div>
        </li>
        <li>
          <div
            className={styles["icn"]}
            style={{
              background: `url(${boxIcn})`,
              backgroundSize: "65% 65%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
          Maintenance
          <div className={styles["open-arrow"]}></div>
        </li>
        <li>
          {" "}
          <div
            className={styles["icn"]}
            style={{
              background: `url(${seetingsIcn})`,
              backgroundSize: "65% 65%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
          Settings
          <div className={styles["open-arrow"]}></div>
        </li>
        <li>
          {/* <div className={styles['upgrade-img']}>
          </div> */}
          <button>Upgrade</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

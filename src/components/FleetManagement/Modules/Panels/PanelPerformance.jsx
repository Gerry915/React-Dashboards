import styles from "style/FleetManagement/FleetMain.module.scss";

import UpArrow from "icons/FleetManagement/up-arrow.svg";
import DownArrowYellow from "icons/FleetManagement/down-arrow-y.svg";
import DownArrowRed from "icons/FleetManagement/down-arrow-r.svg";

const fleets = [
  {
    rego: "E00CF",
    rate: 85,
    revenue: 37181,
  },
  {
    rego: "H07HV",
    rate: 77,
    revenue: 23181,
  },
  {
    rego: "DP9682",
    rate: 45,
    revenue: 1181,
  },
  {
    rego: "DR01R",
    rate: 29,
    revenue: 54181,
  },
  {
    rego: "A01G7",
    rate: 89,
    revenue: 94181,
  },
  {
    rego: "H00FC",
    rate: 98,
    revenue: 194181,
  },
  {
    rego: "B92EG",
    rate: 12,
    revenue: 181,
  },
];

const data = fleets.map((item, index) => {
  return (
    <tr key={index} className={styles['table-item']}>
      <td>
        <div className={styles["icon-wrapper"]}>
          <div className={styles["table-icon"]}>{index + 1}</div>
        </div>
        <span>#</span>
        {item.rego}
      </td>
      <td>
        <div className={styles["p-row"]}>
          <div className={styles["p-bar"]}>
            <div className={styles["p-bar__value"]}></div>
          </div>
          {item.rate}
          <span>%</span>
        </div>
      </td>
      <td>
        <div className={styles["renvenue-row"]}>
          <span>$</span>
          {item.revenue}
          <div className={styles["arrow"]}>
            <img src={UpArrow} alt="arrow" />
          </div>
        </div>
      </td>
    </tr>
  );
});

const PanelPerformance = () => {
  return (
    <div className={`${styles["main-panel"]} ${styles["main-performance"]}`}>
      <header>
        <h2>Performance</h2>
      </header>
      <table className={styles["performance__content"]}>
        <tr className={styles["table-header"]}>
          <th>FLEET</th>
          <th>PROFORMANCE RATE</th>
          <th style={{ textAlign: "right" }}>REVENUE</th>
        </tr>
        {data}
      </table>
    </div>
  );
};

export default PanelPerformance;

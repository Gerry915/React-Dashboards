import styles from "style/FleetManagement/FleetMain.module.scss";

import UpArrowIcn from "icons/FleetManagement/up-arrow.svg";
import DownArrowIcn from "icons/FleetManagement/down-arrow-y.svg";

const summaryData = [
  {
    title: "Average Revenue",
    amount: "124k",
    growing: true,
    diff: "0.5%",
  },
  {
    title: "Average Income",
    amount: "500k",
    growing: true,
    diff: "0.5%",
  },
  {
    title: "Average Outcome",
    amount: "378k",
    growing: false,
    diff: "0.5%",
  },
];

const summaryItem = summaryData.map((element) => {
  return (
    <div className={styles["summary-item"]}>
      <h4>{element.title}</h4>
      <div className={styles["summary-content"]}>
        <p className={styles["amount"]}>
          <span>$</span>
          {element.amount}
        </p>
        <div className={styles["status-wrapper"]}>
          <img src={element.growing ? UpArrowIcn : DownArrowIcn} alt="arrow" />
          <p
            className={
              element.growing ? styles["text-clr-up"] : styles["text-clr-down"]
            }
          >
            {element.diff}
          </p>
        </div>
      </div>
    </div>
  );
});

const PanelRevenue = () => {
  return (
    <div className={`${styles["main-panel"]} ${styles["main-revenue"]}`}>
      <header>
        <h2>Revenue</h2>
        <div className={styles["button-group"]}>
          <button>day</button>
          <button>month</button>
          <button>year</button>
        </div>
      </header>
      <div className={styles["content-wrapper"]}>
        <div className={styles["content-row"]}>{summaryItem}</div>
      </div>
    </div>
  );
};

export default PanelRevenue;

import styles from "style/FleetManagement/FleetMain.module.scss";

const MainRowItem = (props) => {
  return (
    <div className={styles["row-item"]}>
      <div className={styles["row-content-wrapper"]}>
        <h2>{props.amount ? <span>${props.amount}</span> : props.hours}</h2>
        <p>{props.title}</p>
      </div>
      <div className={styles["row-icn"]}>
        <img src={props.icon} alt="Total Expense" />
      </div>
    </div>
  );
};

export default MainRowItem;

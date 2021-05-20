import styles from "style/FleetManagement/FleetMain.module.scss";
import DownloadIcn from "icons/FleetManagement/direct-download.svg";
import { useEffect } from "react";

const expenseData = [
  {
    title: "Maintenance",
    amount: 32000,
    color: "#33373D",
  },
  {
    title: "Labour Cost",
    amount: 25000,
    color: "#0D8A72",
  },
  {
    title: "Fuel",
    amount: 15000,
    color: "#2CBB79",
  },
  {
    title: "Other",
    amount: 3000,
    color: "#FFB94D",
  },
];

function drawCircles(ctx, color, start, end) {
  ctx.lineWidth = 10;
  ctx.lineCap = "round"
  ctx.strokeStyle = color
  ctx.beginPath();
  ctx.arc(150, 150, 145, start, end);
  ctx.stroke();
}

const expenseItems = expenseData.map((item, key) => {
  return (
    <div key={key}>
      <div
        className={styles["color-dash"]}
        style={{
          backgroundColor: `${item.color}`,
        }}
      ></div>
      <div className={styles["expense-item-wrapper"]}>
        <h2>{item.title}</h2>
        <p>
          <span>$</span>
          {item.amount}
        </p>
      </div>
    </div>
  );
});

const totalCost = expenseData.reduce((sum, item) => (sum += item.amount), 0)

const PanelExpense = () => {

  useEffect(() => {
    const ctx = document.getElementById('expense-circle').getContext('2d')
    let start = 0
    const gap = 0.15
    expenseData.forEach(item => {
      // https://www.mathsisfun.com/geometry/radians.html
      const precentage = (item.amount / totalCost).toFixed(2)
      const end = ((Math.PI * precentage) * 2 + start) - gap
      drawCircles(ctx, item.color, start, end)
      start = end + gap
    })
  })

  return (
    <div className={`${styles["main-panel"]} ${styles["main-expense"]}`}>
      <header>
        <h2>Expense</h2>
        <div className={styles["main-panel-icn-wrapper"]}>
          <img src={DownloadIcn} alt="Download Sheet" />
        </div>
      </header>
      <div className={styles["main-expense__content"]}>
        <div className={styles["main-expense__summary-circle"]}>
          <canvas className={`${styles["circle-chart"]}`} id="expense-circle" width="300" height="300"></canvas>
          <div className={styles["total-wapper"]}>
            <h2><span>$</span>
              {/* Well this is not easy to understand I guess... */}
              {/* In prod, it should be a function run here */}
              {/* Get the total, take 3 digit and append letter 'k' */}
              {totalCost.toString().slice(0,3)}k
            </h2>
            <p>Total Expense</p>
          </div>
        </div>
        <div className={styles["main-expense__detail"]}>{expenseItems}</div>
      </div>
    </div>
  );
};

export default PanelExpense;
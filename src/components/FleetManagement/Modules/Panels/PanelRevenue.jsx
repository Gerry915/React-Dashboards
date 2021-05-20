import styles from "style/FleetManagement/FleetMain.module.scss";

import UpArrowIcn from "icons/FleetManagement/up-arrow.svg";
import DownArrowIcn from "icons/FleetManagement/down-arrow-y.svg";

import Chart from "chart.js/auto";
import { useEffect } from "react";

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

const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEV",
];

const PanelRevenue = () => {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    drawChart(ctx);
  });

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
        <div className={styles["content-row"]}>
          {summaryItem}
          <div
            className={`${styles["summary-item"]} ${styles["info-wrapper"]}`}
          >
            <div className={styles["income-wrapper"]}>
              <p>Income</p>
              <div className={styles["income-bar"]}></div>
            </div>
            <div className={styles["income-wrapper"]}>
              <p>Last year income</p>
              <div
                className={`${styles["income-bar"]} ${styles["income-bar__light"]}`}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles["canvas-wrapper"]} id="canvas-wrapper">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
};

function drawChart(ctx) {

  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(21, 189, 156,0.8)');
    gradient.addColorStop(1, 'rgba(175, 237, 225,0)');

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          data: [
            20000, 40000, 60000, 20000, 90000, 20000, 40000, 35000, 140000,
            50000, 21000, 30000,
          ],
          label: "",
          borderColor: "#0D8A72",
          borderWidth: 3,
          fill: true,
          backgroundColor: gradient,
          tension: 0.3,
          borderCapStyle: "round",
          pointBorderWidth: 5,
          pointHitRadius: 30,
          pointHoverBorderWidth: 15,
        },
        {
          data: [
            2000, 60000, 40000, 50000, 120000, 25000, 47600, 15000, 14000,
            15000, 27000, 50000,
          ],
          label: "",
          borderColor: "#82e0d1",
          borderWidth: 3,
          fill: false,
          tension: 0.3,
          borderCapStyle: "round",
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      filler: {
        propagate: false,
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            borderDash: [4, 8],
          }
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

export default PanelRevenue;

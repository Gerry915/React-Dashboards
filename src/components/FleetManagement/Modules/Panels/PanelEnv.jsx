import styles from "style/FleetManagement/FleetMain.module.scss";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import UpArrow from "icons/FleetManagement/up-arrow.svg";

const PanelEnv = () => {
  useEffect(() => {
    const ctx = document.getElementById("chart").getContext("2d");
    drawChart(ctx);
  });
  return (
    <div className={`${styles["main-panel"]} ${styles["main-env"]}`}>
      <header>
        <h2>CO2 Emission</h2>
        <div className={styles["button-group"]}>
          <button>day</button>
          <button>month</button>
          <button>year</button>
        </div>
      </header>
      <div className={styles["p-content-row"]}>
        <h2>Average Emission</h2>
        <div className={styles["p-content-row__content"]}>
          <p>7.000T</p>
          <div>
            <img src={UpArrow} alt="arrow" />
            <span>0.5%</span>
          </div>
        </div>
      </div>
      <div className={styles["co2-canvas-wrapper"]}>
        <canvas id="chart"></canvas>
      </div>
    </div>
  );
};

function drawChart(ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SET",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          data: [
            5000, 10000, 60000, 5000, 20000, 43000, 89000, 35000, 45000, 22111,
          ],
          label: "",
          borderColor: "#1dd144",
          backgroundColor: "#1dd144",
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      scales: {
        y: {
          grid: {
            borderDash: [4, 8],
          },
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

export default PanelEnv;

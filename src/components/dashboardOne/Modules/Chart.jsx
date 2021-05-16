import "../../../style/DashboardOne/Chart.scss";

const rawData = [
  {
    month: "JAN",
    amount: 5000,
  },
  {
    month: "FEB",
    amount: 10000,
  },
  {
    month: "MAR",
    amount: 90000,
  },
  {
    month: "APR",
    amount: 30000,
  },
  {
    month: "MAY",
    amount: 22440,
  },
  {
    month: "JUN",
    amount: 1200,
  },
  {
    month: "JUL",
    amount: 32900,
  },
  {
    month: "AUG",
    amount: 55000,
  },
  {
    month: "SEP",
    amount: 75000,
  },
  {
    month: "OCT",
    amount: 76500,
  },
  {
    month: "NOV",
    amount: 55000,
  },
  {
    month: "DEC",
    amount: 100000,
  },
];

const cols = rawData.map((item) => {
  return (
    <div className="data-col">
      <div
        className="data-bar"
        style={{ height: `${(item.amount / 100000) * 100}%` }}
      ></div>
      <p className="text-grey">{item.month}</p>
    </div>
  );
});

const Chart = () => {
  return (
    <div className="chart-wrapper">
      <div className="marker">
        <div className="marker-row"></div>
        <div className="marker-row"></div>
        <div className="marker-row"></div>
        <div className="marker-row"></div>
      </div>
      <div className="label-wrapper">
        <div>
          <p className="text-grey">100k</p>
        </div>
        <div>
          <p className="text-grey">50k</p>
        </div>
        <div>
          <p className="text-grey">25k</p>
        </div>
        <div>
          <p className="text-grey">0k</p>
        </div>
      </div>
      {cols}
    </div>
  );
};

export default Chart;

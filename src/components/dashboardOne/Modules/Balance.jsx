import "../../../style/DashboardOne/Balance.scss";
import Chart from 'components/dashboardOne/Modules/Chart'

const Balance = () => {
  return (
    <div id="balance-wrapper">
      <div className="balance-header-area">
        <div>
          <p className="title text-grey">Balance</p>
          <p className="amount-text">
            <span>$</span>1500
          </p>
        </div>
        <p className="text-grey">PAST 30 DAYS</p>
      </div>
      <div className="balance-chart">
        <Chart />
      </div>
    </div>
  );
};

export default Balance;

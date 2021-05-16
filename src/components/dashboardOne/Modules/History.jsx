import HistoryRow from 'components/dashboardOne/Modules/HistoryRow'
import "style/DashboardOne/History.scss"

const History = () => {
  return (
    <div className="history">
      <h1>History</h1>
      <p className="text-grey">Transection of last 6 months</p>
      <div className="history-list-wrapper">
        <ul className="history-list">
          <HistoryRow />
          <HistoryRow />
          <HistoryRow />
          <HistoryRow />
        </ul>
      </div>
      <div className="btn-wrapper">
        <button className="see-all-btn">See all</button>
      </div>
    </div>
  );
};

export default History;

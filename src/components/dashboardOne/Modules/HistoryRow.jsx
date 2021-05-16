import '../../../style/DashboardOne/History.scss';

const HistoryRow = () => {
  return (
    <div className="history-row">
      <div className="avatar">
        <img src="https://picsum.photos/200/200" alt="avatar" />
      </div>
      <p className="text-grey">Car Insurance</p>
      <p className="text-grey">12:32:00 PM</p>
      <p className="text-grey"><span>$</span>350</p>
      <p className="text-grey">Completed</p>
    </div>
  )
}

export default HistoryRow
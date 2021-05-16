import '../../../style/DashboardOne/History.scss';

const HistoryRow = (props) => {
  return (
    <div className="history-row">
      <div className="avatar">
        <img src={ props.thumbnail } alt="avatar" />
      </div>
      <p className="text-grey">{ props.title }</p>
      <p className="text-grey">{ props.time }</p>
      <p className="text-grey"><span>$</span>{ props.amount }</p>
      <p className="text-grey">{ props.status }</p>
    </div>
  )
}

export default HistoryRow
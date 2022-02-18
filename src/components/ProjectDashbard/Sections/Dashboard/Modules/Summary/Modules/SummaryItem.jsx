import '../../../../../../../style/ProjectDashboard/projectDash.scss'

export const SummaryItem = ({ title, value, summary }) => {
  return (
    <div className="summary-item">
      <p>{ title }</p>
      <h2>{ value }</h2>
      <p className='summary-label'>{ summary }</p>
    </div>
  )
}
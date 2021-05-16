import HistoryRow from 'components/dashboardOne/Modules/HistoryRow'
import "style/DashboardOne/History.scss"

const historyData = [
  {
    thumbnail: 'https://picsum.photos/id/459/300/300',
    title: 'Car Insurance',
    time: '12:35:00 PM',
    amount: 350,
    status: 'COMPLETED'
  },
  {
    thumbnail: 'https://picsum.photos/id/437/300/300',
    title: 'House Rent',
    time: '15:35:00 PM',
    amount: 1440,
    status: 'COMPLETED'
  },
  {
    thumbnail: 'https://picsum.photos/id/257/300/300',
    title: 'Internet Bill',
    time: '09:35:00 PM',
    amount: 79.99,
    status: 'COMPLETED'
  },
  {
    thumbnail: 'https://picsum.photos/id/441/300/300',
    title: 'Water Bill',
    time: '21:35:00 PM',
    amount: 369.50,
    status: 'COMPLETED'
  },
]

const historyItems = historyData.map(item => {
  return <HistoryRow thumbnail={ item.thumbnail } title={ item.title } time={ item.time } amount={ item.amount } status={ item.status }/>
})

const History = () => {
  return (
    <div className="history">
      <h1>History</h1>
      <p className="text-grey">Transection of last 6 months</p>
      <div className="history-list-wrapper">
        <ul className="history-list">
          { historyItems }
        </ul>
      </div>
      <div className="btn-wrapper">
        <button className="see-all-btn">See all</button>
      </div>
    </div>
  );
};

export default History;

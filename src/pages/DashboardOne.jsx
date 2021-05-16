import "../style/dashbardOne.scss";
import SideBar from '../components/dashboardOne/Sidebar';
import MainContentArea from '../components/dashboardOne/MainContentArea';
import Detail from '../components/dashboardOne/Detail';

const DashboardOne = () => {
  return (
    <div className="dashboard-one">
      <SideBar />
      <MainContentArea />
      <Detail />
    </div>
  );
};

export default DashboardOne;

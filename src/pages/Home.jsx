import DashboardThumbnail from "components/home/DashboardThumbnail";
import "../App.scss";
import styles from "../style/Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <main>
        <h1>Dashboards.. lots of them...</h1>
        <div>
          <ul>
            <DashboardThumbnail link="project-dashboard" title="Project Dashboard" />
            <DashboardThumbnail link="dashboard-one" title="Bank Dashboard" />
            <DashboardThumbnail link="fleet-management" title="Logistic Dashboard" />
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;

import "../App.scss";
import styles from "../style/Home.module.scss";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <main>
        <div className={styles["hero"]}>
          <h1>Dashboards, and lots of them</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,74.7C840,96,960,160,1080,160C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className={ styles['content'] }>
          <h2>Dashboard</h2>
        </div>
      </main>
    </div>
  );
};

export default Home;

import styles from "style/FleetManagement/FleetMain.module.scss";

import PanelRevenue from "components/FleetManagement/Modules/Panels/PanelRevenue";
import PanelPerformance from "components/FleetManagement/Modules/Panels/PanelPerformance";
import PanelExpense from "components/FleetManagement/Modules/Panels/PanelExpense";
import PanelEnv from "components/FleetManagement/Modules/Panels/PanelEnv";
import MainRowItem from "components/FleetManagement/Modules/MainRowItem";

import DollarIcn from "icons/FleetManagement/dollar-symbol.svg";
import IncreaseIcn from "icons/FleetManagement/increase.svg";
import SuitcaseIcn from "icons/FleetManagement/suitcase.svg";
import ClockIcn from "icons/FleetManagement/clock.svg";

const MainContent = () => {
  return (
    <main className={styles["main-content"]}>
      <header className={styles["main-header"]}></header>
      <div className={styles["main-row"]}>
        <MainRowItem icon={DollarIcn} amount="124k" title="Total Expenses" />
        <MainRowItem icon={IncreaseIcn} amount="134k" title="Profit" />
        <MainRowItem icon={SuitcaseIcn} amount="100k" title="Revenue" />
        <MainRowItem icon={ClockIcn} hours="300k" title="Labour Hours" />
      </div>
      <PanelRevenue />
      <PanelExpense />
      <PanelPerformance />
      <PanelEnv />
    </main>
  );
};

export default MainContent;

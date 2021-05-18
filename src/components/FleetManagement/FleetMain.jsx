import styles from "style/FleetManagement/FleetMain.module.scss"

import Sidebar from "components/FleetManagement/Modules/Sidebar"
import MainContent from "components/FleetManagement/Modules/MainContent"

const FleetMain = () => {
  return (
    <div className={styles['fleet-main']}>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default FleetMain
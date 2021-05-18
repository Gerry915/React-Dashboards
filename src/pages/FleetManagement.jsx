import styles from "../style/FleetManagement/FleetManagement.module.scss"

import FleetHeader from "../components/FleetManagement/FleetHeader"
import FleetMain from "components/FleetManagement/FleetMain"

const FleetManagement = () => {
  return (
    <div className={styles['container']}>
      <FleetHeader />
      <FleetMain />
    </div>
  )
}

export default FleetManagement
import styles from '../../style/DashboardThumbnail.module.scss'

const DashboardThumbnail = ({ link, title }) => {
  return (
    <li className={styles['item-card']}>
      <div className={styles['content-wrapper']}>
        <a href={link}>{ title }</a>
      </div>
    </li>
  )
}

export default DashboardThumbnail
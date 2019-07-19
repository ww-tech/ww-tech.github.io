import styles from './styles.scss'

function Footer() {
  return (
    <div id='footer' className={styles.footer}>
      <a href="https://medium.com/ww-tech-blog" className={styles.footer_link}>Our Blog</a>
      <a href="https://www.weightwatchers.com/us/" className={styles.footer_link}>Our Website</a>
    </div>
  )

}

export default Footer
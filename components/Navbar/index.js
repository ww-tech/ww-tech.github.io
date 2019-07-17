import styles from './styles.scss'

function Navbar(){
  return(
    <div id='nav' className={styles.nav}>
      <a href= '/'><img src="https://cdn-images-1.medium.com/max/2600/1*ICI6stVxJP3mhKt-GWCOvg@2x.png" className={styles.logo} /></a>
      <nav className={styles.navbar}>
        <a href='/' className={styles.navitem}>Home</a>
        <a href='repos' className={styles.navitem}>Our Projects</a>
        <a href='people' className={styles.navitem}>Our Team</a>
      </nav>
    </div>)
}



export default Navbar
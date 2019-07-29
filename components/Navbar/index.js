import styles from './styles.scss'

function Navbar(){
  return(
    <div id='nav' className={styles.nav}>
      <a href= '/'>
        <img src="https://cdn-images-1.medium.com/max/2600/1*ICI6stVxJP3mhKt-GWCOvg@2x.png" className={styles.logo} />
      </a>
    </div>
  )
}

export default Navbar
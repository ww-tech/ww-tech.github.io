import { useEffect } from 'react'
import fetch from 'node-fetch'
import styles from '../styles/index.scss'

function Home() {
  return (
    <div id='about' className={styles.about}>
      <h1>We are WW Tech!</h1>
      <p>WW inspires healthy habits for real life, using 
        cutting edge science and technology to meet our community 
        where they are and own scalable behavior change. Check us out at our <nbsp/>
        <a href="https://medium.com/ww-tech-blog">blog</a> and <nbsp/>
        <a href="https://www.weightwatchers.com/us/">website</a>.
      </p>
    </div>
  )
}

export default Home
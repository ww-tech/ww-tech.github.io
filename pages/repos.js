import fetch from 'node-fetch'
import styles from '../styles/repos.scss'

function Repos(data) {
  if (data.message) return data.message
  const repos = Object.values(data)
  repos.sort((repo1, repo2) => repo1.watchers - repo2.watchers )
  return (<>
    <div id='title' className={styles.title}>Our Open Source Repositories</div>
    <div id='repos' className={styles.repos}>
    {
      repos.map(repo => {
        return (
          <div id='repo' key={repo.id} className={styles.repo}>
            <span id='name' className={styles.name}>{repo.name}</span>
            <div id='properties' className={styles.properties}>
              <span>{repo.description}</span>
              <span>{repo.language}</span>
              <span>{repo.watchers} Watchers</span>
              <span>{repo.forks} Forks</span>
              <a href={repo.html_url}>{repo.html_url}</a>
            </div>
          </div>
        )
      })
    }
    </div>
  </>)
}

Repos.getInitialProps = async() => {
  const data = await fetch('https://api.github.com/orgs/WW-tech/repos')
  .then(response => response.json())
  if (data.message) return data
  const filteredData = data.filter(repo => repo.name != 'ww-tech.github.io')
  return filteredData
}

export default Repos
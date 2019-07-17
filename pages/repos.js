import fetch from 'node-fetch'
import styles from '../styles/repos.scss'
import GitHubButton from 'react-github-btn'

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
              <span className={styles.property}>{repo.description}</span>
              <span className={styles.property}>{repo.language}</span>
              <GitHubButton className={styles.property} href={`https://github.com/ww-tech/${repo.name}/subscription`} data-icon="octicon-eye" data-show-count="true" aria-label={`Watch ww-tech/${repo.name} on GitHub`}>Watch</GitHubButton>
              <GitHubButton className={styles.property} href={`https://github.com/ww-tech/${repo.name}/fork`} data-icon="octicon-repo-forked" data-show-count="true" aria-label={`Fork ww-tech/${repo.name} on GitHub`}>Fork</GitHubButton>
              <GitHubButton className={styles.property} href={`https://github.com/ww-tech/${repo.name}`} data-icon="octicon-star" data-show-count="true" aria-label={`Star ww-tech/${repo.name} on GitHub`}>Star</GitHubButton>
              <a className={styles.property} href={repo.html_url}><img src='/static/github-icon.png' alt='github icon' width='20px' /></a>
              
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
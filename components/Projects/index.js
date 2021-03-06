import styles from './styles.scss'
import GitHubButton from 'react-github-btn'

function Projects({repos}) {
    return (
        <div id='projects' className={styles.projects}>
        <div className={styles.projects_title}>Our Projects</div>
        <div id='repos' className={styles.repos}>
        {
          repos.map(repo => {
            return (
              <div id='repo' key={repo.id} className={styles.repo}>
                <div id='top' className={styles.top}>
                  <a href={repo.html_url} target="_blank"><img src='/static/github-icon.png' alt='github icon' width='20px' /></a>
                  <a href={repo.html_url} target="_blank" className={styles.name_link}><span id='name' className={styles.name}>{repo.name}</span></a>
                </div>
                <div id='middle' className={styles.middle}>
                  <span id='description' className={styles.property + ' ' + styles.description}>{repo.description}</span>
                  <span className={styles.property}>{repo.language}</span>
                </div>
                <div id='bottom' className={styles.bottom}>
                  <GitHubButton className={styles.property} href={`https://github.com/ww-tech/${repo.name}/subscription`} data-icon="octicon-eye" data-show-count="true" aria-label={`Watch ww-tech/${repo.name} on GitHub`}>Watch</GitHubButton>
                  <GitHubButton className={styles.property} href={`https://github.com/ww-tech/${repo.name}/fork`} data-icon="octicon-repo-forked" data-show-count="true" aria-label={`Fork ww-tech/${repo.name} on GitHub`}>Fork</GitHubButton>
                  <GitHubButton className={styles.property} href={`https://github.com/ww-tech/${repo.name}`} data-icon="octicon-star" data-show-count="true" aria-label={`Star ww-tech/${repo.name} on GitHub`}>Star</GitHubButton>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
}

export default Projects
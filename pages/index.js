import fetch from 'node-fetch'
import styles from '../styles/index.scss'
import GitHubButton from 'react-github-btn'

function Repos({repos, members, error}) {
  if (error) return error
  const reposArr = Object.values(repos)
  reposArr.sort((repo1, repo2) => repo1.watchers - repo2.watchers )
  return (<>
    <div id='header' className={styles.header}>
        <span className={styles.hero}>We are WW-tech</span>
        <span className={styles.info}>WW inspires healthy habits for real life, using cutting edge science and technology to meet our community where they are and own scalable behavior change.</span>
    </div>
    <div id='projects' className={styles.projects}>
      <div className={styles.projects_title}>Our Projects</div>
      <div id='repos' className={styles.repos}>
      {
        reposArr.map(repo => {
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
    <div id='people'>
    <div id="title" className={styles.team_title}>
        Our Team
      </div>
      <div id="content" className={styles.bg}>
        <div id="members" className={styles.members}>
          {members.map(({ id, html_url, avatar_url, name }) => {
            return (
              <div id="member" className={styles.member} key={id}>
                <a href={html_url}>
                  <img
                    src={avatar_url}
                    alt="avatar"
                    className={styles.avatar}
                  />
                </a>
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </>)
}

Repos.getInitialProps = async() => {
  const repoObj = await fetch('https://api.github.com/orgs/WW-tech/repos')
  .then(response => response.json())
  if (repoObj.message) return {repos: null, members: null, error: repoObj.message}
  const repos = repoObj.filter(repo => repo.name != 'ww-tech.github.io')


  const res = await fetch("https://api.github.com/orgs/WW-tech/public_members");
  let members = await res.json();
  if (members.message) return {repos: null, members: null, error: members.message}
  members = await Promise.all(
    members.map(async ({ id, html_url, avatar_url, url }) => ({
      id,
      html_url,
      avatar_url,
      name: (await (await fetch(url)).json()).name
    }))
  );


  return {repos, members, error: null}
}

export default Repos
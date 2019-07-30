import fetch from 'node-fetch'
import styles from '../styles/index.scss'
import Projects from '../components/Projects'
import People from '../components/People'

function Index({repos, members, error}) {
  if (error) return error
  repos.sort((repo1, repo2) => repo1.watchers - repo2.watchers )
  return (<>
    <div id='header' className={styles.header}>
        <span className={styles.hero}>We are WW-tech</span>
        <span className={styles.info}>WW inspires healthy habits for real life, using cutting edge science and technology to meet our community where they are and own scalable behavior change.</span>
    </div>
    <Projects repos={repos} />
    <People members={members} />
  </>)
}

Index.getInitialProps = async() => {
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

export default Index
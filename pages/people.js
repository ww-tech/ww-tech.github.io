import fetch from 'node-fetch'
import styles from '../styles/people.scss';

function People(data) {
  const members = Object.values(data)

  return (<>
    <div id='title' className={styles.title}>Our Team</div>
    <div id='content' className={styles.bg}><div id='members' className={styles.members}>
      {
        members.map(member => {
          return (
            <div id='member' className={styles.member} key={member.id}>
              <img src={member.avatar_url} alt='avatar' className={styles.avatar}/>
              <span>{member.login}</span>
            </div>
          )
        })
      }
    </div></div>
  </>)
}

People.getInitialProps = async() => {
  const data = await fetch('https://api.github.com/orgs/WW-tech/public_members')
  .then(response => response.json())
  return data
}

export default People
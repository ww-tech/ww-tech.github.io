import fetch from 'node-fetch'
import styles from '../styles/people.scss';

const mockData = {}
for (let i = 0; i < 10; i++) {
  mockData[`${i}`] = {login: 'pinalbhatt', avatar_url: 'https://avatars0.githubusercontent.com/u/6505848?v=4', html_url: 'https://github.com/pinalbhatt'}
}

function People(data) {
  const members = Object.values(data)

  return (
    <div id='members' className={styles.members}>
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
    </div>
  )
}

People.getInitialProps = async() => {
  // const data = await fetch('https://api.github.com/orgs/WW-tech/public_members')
  // .then(response => response.json())
  const data = mockData
  return data
}

export default People
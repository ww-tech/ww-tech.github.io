import styles from './styles.scss'

function People ({members}) {
    return (
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
    )
}

export default People
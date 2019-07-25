import fetch from "node-fetch";
import styles from "../styles/people.scss";

function People({ members, error}) {
  if (error)
    return <div>{error}</div>
  return (
    <>
      <div id="title" className={styles.title}>
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
    </>
  );
}

People.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/orgs/WW-tech/public_members");
  let members = await res.json();
  if (members.message) return {members: null, error: members.message}
  members = await Promise.all(
    members.map(async ({ id, html_url, avatar_url, url }) => ({
      id,
      html_url,
      avatar_url,
      name: (await (await fetch(url)).json()).name
    }))
  );
  return { members, error: null };
};

export default People;

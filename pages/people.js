import fetch from 'node-fetch'

function People(data) {
  return (
    <div>
    </div>
  )
}

People.getInitialProps = async() => {
  const data = await fetch('https://api.github.com/orgs/WW-tech/public_members')
  .then(response => response.json())
  return data
}

export default People
import React from 'react'
import UserDetails from './UserDetails'
import PropTypes from 'prop-types'

function App() {
  const [user, setUser] = React.useState(null)
  const [repos, setRepos] = React.useState([])
  const [username, setUsername] = React.useState('')

  const handleSubmit = (userData, reposData) => {
    setUser(userData)
    setRepos(reposData)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setUser(null)
    setRepos([])
    setUsername('')
  }

  App.propTypes = {
    user: PropTypes.object,
    repos: PropTypes.array,
    username: PropTypes.string,
  }

  const handleSubmitRepo = async (event) => {
    event.preventDefault()
    const userResponse = await fetch(`https://api.github.com/users/${username}`)
    const userData = await userResponse.json()

    const reposResponse = await fetch(userData.repos_url)
    const reposData = await reposResponse.json()

    handleSubmit(userData, reposData)
  }

  const handleChangeRepo = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <UserDetails user={user} repos={repos} />
      <form onSubmit={handleSubmitRepo}>
        <input type="text" value={username} onChange={handleChangeRepo} />
        <button type="submit">Submit</button>
      </form>
      <form>
        <button onClick={handleChange} type="submit">
          Reset
        </button>
      </form>
    </div>
  )
}

export default App

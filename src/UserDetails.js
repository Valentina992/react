import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user, repos } = this.props

    if (!user) {
      return null
    }

    return (
      <div>
        <img src={user.avatar_url} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <p>Location: {user.location}</p>
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

UserDetails.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
}

export default UserDetails

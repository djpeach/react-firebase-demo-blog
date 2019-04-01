import React       from 'react'
import { NavLink } from 'react-router-dom'
import routes      from '../../config/routes'

class UnauthorizedLinks extends React.Component {
  render() {
    return (
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-link" to={ routes.login }>Login</NavLink>
          <NavLink className="nav-link" to={ routes.register }>Register</NavLink>
        </div>
    )
  }
}

export default UnauthorizedLinks
import React       from 'react'
import { NavLink } from 'react-router-dom'
import routes      from '../../config/routes'
import { connect } from 'react-redux'
import { logout }  from '../../store/actions/auth'

class UnauthorizedLinks extends React.Component {

  logout = () => {
    this.props.logout()
  }

  render() {
    return (
        <div className="navbar-nav ml-auto">
          <NavLink to={ routes.postForm } className="nav-link">+ Post</NavLink>
          <a href="#" className="nav-link" onClick={ this.logout }>Logout</a>
        </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthorizedLinks)
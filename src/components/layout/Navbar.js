import React             from 'react'
import { connect }       from 'react-redux'
import AuthorizedLinks   from "./AuthorizedLinks";
import UnauthorizedLinks from "./UnauthorizedLinks";
import { Link }          from 'react-router-dom'
import routes            from '../../config/routes'

class Navbar extends React.Component {
  render() {
    const { isAuthorized } = this.props
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to={ routes.root }>Blog</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {
                  isAuthorized ? <AuthorizedLinks/> : <UnauthorizedLinks/>
                }
              </div>
            </div>
          </nav>
        </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  return {
    isAuthorized: !!state.firebase.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
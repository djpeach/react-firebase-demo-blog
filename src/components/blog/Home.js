import React        from 'react'
import { connect }  from 'react-redux'
import { Redirect } from 'react-router-dom'
import routes       from '../../config/routes'
import Navbar       from "../layout/Navbar";
import PostList     from "./PostList";

class Home extends React.Component {
  render() {
    const { isAuthorized } = this.props
    return (
        isAuthorized ? (
            <div>
              <Navbar/>
              <div className="container">
                <PostList/>
              </div>
            </div>
        ) : (
            <Redirect to={ routes.login }/>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
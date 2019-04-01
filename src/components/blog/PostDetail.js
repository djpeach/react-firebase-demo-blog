import React                from 'react'
import { connect }          from 'react-redux'
import { compose }          from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Navbar               from "../layout/Navbar";
import { Redirect }         from 'react-router-dom'
import routes               from '../../config/routes'

class PostDetail extends React.Component {
  render() {
    const { post, isAuthorized } = this.props
    return (
        isAuthorized ? (
            <div>
              <Navbar/>
              <div className="container">
                <div className="row pt-5">
                  <div className="col jumbotron">
                    {
                      post ? (
                          <div>
                            <h2>{ post.title }</h2>
                            <p>{ post.content }</p>
                          </div>
                      ) : (
                          <div>
                            <h2>No post found with id:</h2>
                            <p>{ this.props.match.params.id }</p>
                          </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
        ) : (
            <Redirect to={ routes.login }/>
        )

    )
  }
}

const mapStateToProps = (state, prevProps) => {
  const posts = state.firestore.data.posts
  const postId = prevProps.match.params.id
  const post = posts ? posts[ postId ] : null
  console.log(post)
  return {
    post: post,
    isAuthorized: !!state.firebase.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection: 'posts' }
    ])
)(PostDetail)


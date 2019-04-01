import React                from 'react'
import { compose }          from 'redux'
import { connect }          from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import PostSummary          from "./PostSummary";

class PostList extends React.Component {

  renderPosts(posts) {
    if (!posts) {
      return (
          <div>
            <h3>Loading Posts...</h3>
          </div>
      )
    } else if (posts.length <= 0) {
      return (
          <div>
            <h3>No posts</h3>
          </div>
      )
    } else {
      return (
          posts.map(post => <PostSummary post={ post } key={ post.id }/>)
      )
    }
  }

  render() {
    const { posts } = this.props
    return (
        <div>
          <h2 className="my-3">Recent Posts</h2>
          { this.renderPosts(posts) }
        </div>
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  return {
    posts: state.firestore.ordered.posts
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
)(PostList)
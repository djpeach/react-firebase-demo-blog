import React    from 'react'
import { Link } from 'react-router-dom'
import routes   from '../../config/routes'

class PostSummary extends React.Component {

  getExcerpt = (post) => {
    const elipse = post.content.length > 300 ? '. . .' : ''
    return post.content.substr(0, 300) + elipse
  }

  render() {
    const { post } = this.props
    return (
        <div>
          <div className="card col-12 my-3">
            <div className="card-body">
              <h5 className="card-title">{ post.title }</h5>
              <p className="card-text">{ this.getExcerpt(post) }</p>
              <Link to={ routes.postDetail + post.id } className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
    )
  }
}

export default PostSummary
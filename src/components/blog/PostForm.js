import React          from 'react'
import { Redirect }   from 'react-router-dom'
import { connect }    from 'react-redux'
import routes         from '../../config/routes'
import { createPost } from '../../store/actions/blog'
import Navbar         from "../layout/Navbar";

class PostForm extends React.Component {

  state = {
    title: '',
    content: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.createPost(this.state)
  }

  onChange = (event) => {
    this.setState({
      [ event.target.id ]: event.target.value
    })
  }

  render() {
    const { isAuthorized, postCreationError, postCreationSuccess } = this.props
    return (
        isAuthorized ? (
            postCreationSuccess ? (
                <Redirect to={ routes.home }/>
            ) : (
                <div>
                  <Navbar/>
                  <div className="container">
                    <div className="row pt-5">
                      <div className="col jumbotron">
                        <h2 className="mb-5">Create a new post</h2>
                        <form onSubmit={ this.onSubmit }>
                          {
                            !!postCreationError ? (
                                <div className="row justify-content-center">
                                  <div
                                      className="form-group col-6 alert alert-danger">{ postCreationError.message }</div>
                                </div>
                            ) : (
                                null
                            )
                          }
                          <div className="row justify-content-center">
                            <div className="form-group col-8">
                              <input
                                  className="form-control"
                                  type="text"
                                  id="title"
                                  placeholder="Title"
                                  value={ this.state.title }
                                  onChange={ this.onChange }
                              />
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="form-group col-8">
                          <textarea
                              className="form-control"
                              type="text"
                              id="content"
                              placeholder="Content"
                              value={ this.state.content }
                              onChange={ this.onChange }
                              rows="8"
                          ></textarea>
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="form-group col-8">
                              <button className="btn btn-success d-block ml-auto">Create Post</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            )
        ) : (
            <Redirect to={ routes.login }/>
        )
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  return {
    isAuthorized: !!state.firebase.auth.uid,
    postCreationError: state.blog.postCreationError,
    postCreationSuccess: state.blog.postCreationSuccess,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (fields) => dispatch(createPost(fields))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
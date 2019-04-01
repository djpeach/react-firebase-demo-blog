import React        from 'react'
import Navbar       from '../layout/Navbar'
import { Link }     from 'react-router-dom'
import routes       from '../../config/routes'
import { connect }  from 'react-redux'
import { login }    from '../../store/actions/auth'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
  }

  onChange = (event) => {
    this.setState({
      [ event.target.id ]: event.target.value
    })
  }

  render() {
    const { isAuthorized, loginError } = this.props
    return (
        isAuthorized ? (
            <Redirect to={ routes.home }/>
        ) : (
            <div>
              <Navbar/>
              <div className="container">
                <div className="row pt-5">
                  <div className="col jumbotron">
                    <h3 className="mb-5">Login to your account</h3>
                    <form onSubmit={ this.onSubmit }>
                      {
                        !!loginError ? (
                            <div className="row justify-content-center">
                              <div className="form-group col-6 alert alert-danger">{ loginError.message }</div>
                            </div>
                        ) : (
                            null
                        )
                      }
                      <div className="row justify-content-center">
                        <div className="form-group col-6">
                          <input
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="email@domain.com"
                              value={ this.state.email }
                              onChange={ this.onChange }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="form-group col-6">
                          <input
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="email@domain.com"
                              value={ this.state.password }
                              onChange={ this.onChange }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="form-group col-6">
                          <button className="btn btn-success d-block ml-auto">Login</button>
                        </div>
                      </div>
                    </form>
                    <p className="text-center">
                      <small className="text-muted">Need an account?
                        <Link to={ routes.register }>Register here</Link>.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        )
    )
  }
}

const mapStateToProps = (state, prevProps) => {
  return {
    isAuthorized: !!state.firebase.auth.uid,
    loginError: state.auth.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
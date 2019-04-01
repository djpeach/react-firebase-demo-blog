import React        from 'react'
import Navbar       from '../layout/Navbar'
import { Link }     from 'react-router-dom'
import routes       from '../../config/routes'
import { connect }  from 'react-redux'
import { register } from '../../store/actions/auth'
import { Redirect } from 'react-router-dom'

class Registration extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordVisible: false
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { passwordVisible, ...creds } = this.state
    this.props.register(creds)
  }

  onChange = (event) => {
    this.setState({
      [ event.target.id ]: event.target.value
    })
  }

  onChecked = (event) => {
    this.setState({
      [ event.target.id ]: event.target.checked
    })
  }

  render() {
    const { isAuthorized, registrationError } = this.props
    return (
        isAuthorized ? (
            <Redirect to={ routes.home }/>
        ) : (
            <div>
              <Navbar/>
              <div className="container">
                <div className="row pt-5">
                  <div className="col jumbotron">
                    <h3 className="mb-5">Register for an account</h3>
                    <form onSubmit={ this.onSubmit }>
                      {
                        !!registrationError ? (
                            <div className="row justify-content-center">
                              <div className="form-group col-6 alert alert-danger">{ registrationError.message }</div>
                            </div>
                        ) : (
                            null
                        )
                      }
                      <div className="row justify-content-center">
                        <div className="form-group col-10 col-sm-8 col-md-3">
                          <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              placeholder="First Name"
                              value={ this.state.firstName }
                              onChange={ this.onChange }
                          />
                        </div>
                        <div className="form-group col-10 col-sm-8 col-md-3">
                          <input
                              type="text"
                              id="lastName"
                              className="form-control"
                              placeholder="Last Name"
                              value={ this.state.lastName }
                              onChange={ this.onChange }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="form-group col-10 col-sm-8 col-md-6">
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
                        <div className="form-group col-10 col-sm-8 col-md-6">
                          <input
                              type={ this.state.passwordVisible ? "text" : "password" }
                              id="password"
                              className="form-control"
                              placeholder="password"
                              value={ this.state.password }
                              onChange={ this.onChange }
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="form-group ml-5 col-10 col-sm-8 col-md-6">
                          <input
                              type="checkbox"
                              id="passwordVisible"
                              className="form-check-input"
                              value={ this.state.passwordVisible }
                              onChange={ this.onChecked }
                          />
                          <label htmlFor="passwordVisible"> View Password</label>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="form-group col-10 col-sm-8 col-md-6">
                          <button className="btn btn-success d-block ml-auto">Register</button>
                        </div>
                      </div>
                    </form>
                    <p className="text-center">
                      <small className="text-muted">Have an account?
                        <Link to={ routes.login }>Login here</Link>.
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
    registrationError: state.auth.registrationError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (creds) => dispatch(register(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
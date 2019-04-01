import actionTypes from '../actions/types'

const initState = {
  loginError: null,
  registrationError: null,
  logoutError: null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.auth.registrationError:
      return {
        ...state,
        registrationError: action.err
      }
    case actionTypes.auth.loginError:
      return {
        ...state,
        loginError: action.err
      }
    case actionTypes.auth.logoutError:
      return {
        ...state,
        logoutError: action.err
      }
    case actionTypes.auth.authSuccess:
      return state
    default:
      return state
  }
}

export default reducer
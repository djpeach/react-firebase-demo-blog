import actionTypes from './types'

export const register = (creds) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password).then(res => {
      firestore.collection('users').doc(res.user.uid).set({
        firstName: creds.firstName,
        lastName: creds.lastName,
        email: creds.email
      }).then(res => {
        dispatch({ type: actionTypes.auth.authSuccess })
      })
    }).catch(err => {
      dispatch({ type: actionTypes.auth.registrationError, err: err })
    })
  }
}

export const login = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(creds.email, creds.password).then(res => {
      dispatch({ type: actionTypes.auth.authSuccess })
    }).catch(err => {
      dispatch({ type: actionTypes.auth.loginError, err: err })
    })
  }
}

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signOut().then(res => {
      dispatch({ type: actionTypes.auth.authSuccess })
    }).catch(err => {
      dispatch({ type: actionTypes.auth.logoutError, err: err })
    })
  }
}


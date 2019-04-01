import { combineReducers }  from 'redux'
import { firebaseReducer }  from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer          from './auth'
import blogReducer          from './blog'

const reducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  blog: blogReducer,
})

export default reducer
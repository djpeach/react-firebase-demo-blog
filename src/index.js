import React                                     from 'react'
import ReactDOM                                  from 'react-dom'
import App                                       from './App'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk                                     from 'redux-thunk'
import root                                      from './store/reducers/root'
import { getFirebase, reactReduxFirebase }       from 'react-redux-firebase'
import { getFirestore, reduxFirestore }          from 'redux-firestore'
import { Provider }                              from 'react-redux'
import firebaseConfig                            from './config/firebase'

const store = createStore(root, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true, useFirestoreForProfile: true, userProfile: 'users' }),
    reduxFirestore(firebaseConfig)
))

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={ store }><App/></Provider>, document.getElementById('root'))
})

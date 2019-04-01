import actionTypes from './types'

export const createPost = (fields) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('posts').add({
      title: fields.title,
      content: fields.content
    }).then(res => {
      dispatch({ type: actionTypes.blog.postCreationSuccess })
    }).catch(err => {
      dispatch({ type: actionTypes.blog.postCreationError, err: err })
    })
  }
}
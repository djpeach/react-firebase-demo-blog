import actionTypes from '../actions/types'

const initState = {
  postCreationError: null,
  postCreationSuccess: false,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.blog.postCreationError:
      return {
        ...state,
        postCreationError: action.err,
        postCreationSuccess: false
      }
    case actionTypes.blog.postCreationSuccess:
      return {
        ...state,
        postCreationSuccess: true,
      }
    default:
      return state
  }
}

export default reducer
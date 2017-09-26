import {
  GET_ARTICLES,
  GET_SOURCES,
  GET_ARTICLES_FAILED,
  GET_SOURCES_FAILED
} from '../actions/types'

const INITIAL_STATE = {
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        error: ''
      }
    case GET_ARTICLES_FAILED:
      return {
        error: action.problem
      }
    case GET_SOURCES:
      return {
        error: ''
      }
    case GET_SOURCES_FAILED:
      return {
        error: action.problem
      }
    default:
      return state
  }
}

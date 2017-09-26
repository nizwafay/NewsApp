import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS,
  GET_SOURCES_FAILED
} from '../../actions/types'

const INITIAL_STATE = {
  sources: [],
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  if (action.category === 'business') {
    switch (action.type) {
      case GET_SOURCES:
        return {
          ...INITIAL_STATE,
          loading: true
        }
      case GET_SOURCES_SUCCESS:
        return {
          ...INITIAL_STATE,
          sources: action.sources
        }
      default:
        return state
    }
  }
  return state
}

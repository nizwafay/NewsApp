import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS,
  ERROR_THROWN
} from '../../actions/types'

const INITIAL_STATE = {
  sources: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === ERROR_THROWN) {
    return {
      ...state,
      loading: false
    }
  } else if (action.category === 'technology') {
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

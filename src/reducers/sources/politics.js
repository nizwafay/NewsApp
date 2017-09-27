import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS,
  GET_SOURCES_FAILED
} from '../../actions/types'

const INITIAL_STATE = {
  sources: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === GET_SOURCES_FAILED) {
    return {
      ...INITIAL_STATE,
      loading: false
    }
  } else if (action.category === 'politics') {
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

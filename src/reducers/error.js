import {
  ERROR_THROWN,
  ERROR_CLEAR,
  ERROR_RETRY
} from '../actions/types'

const INITIAL_STATE = {
  error: null,
  actions: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_THROWN:
      return {
        ...state,
        error: action.error,
        actions: [...state.actions, action.action]
      }
    case ERROR_CLEAR:
      return INITIAL_STATE
    case ERROR_RETRY:
      return {
        ...state,
        error: '',
        actions: []
      }
    default:
      return state
  }
}

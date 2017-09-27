import {
  ERROR_THROWN,
  ERROR_CLEAR
} from './types'

export const throwError = (error, action) => ({
  type: ERROR_THROWN,
  error,
  action
})

export const clearError = () => ({
  type: ERROR_CLEAR
})

export const retryError = (actions) => async (dispatch) => {
  actions.forEach(a => {
    dispatch(a)
  })
  dispatch(clearError())
}

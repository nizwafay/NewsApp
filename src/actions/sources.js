import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS,
  GET_SOURCES_FAILED
} from './types'
import { api } from '../config'

export const getSources = (category) => {
  return (dispatch) => {
    dispatch({
      type: GET_SOURCES,
      category
    })

    api.get(`/sources?language=en&category=${category}`)
      .then(response => {
        if (response.ok) {
          getSourcesSuccess(dispatch, response, category)
        } else if (response.problem) {
          dispatch({
            type: GET_SOURCES_FAILED,
            problem: response.problem
          })
        }
      })
  }
}

const getSourcesSuccess = (dispatch, response, category) => {
  dispatch({
    type: GET_SOURCES_SUCCESS,
    sources: response.data.sources,
    category
  })
}

import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS
} from './types'
import { throwError } from './error'
import { api } from '../config'

export const getSources = (category) => {
  return (dispatch, action) => {
    dispatch({
      type: GET_SOURCES,
      category
    })

    api.get(`/sources?language=en&category=${category}`)
      .then(response => {
        if (response.ok) {
          getSourcesSuccess(dispatch, response, category)
        } else if (response.problem) {
          dispatch(throwError(response.problem, getSources(category)))
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

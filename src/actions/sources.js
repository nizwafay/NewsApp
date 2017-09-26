import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS
} from './types'
import { api } from '../config'

export const getSources = (category) => {
  return (dispatch) => {
    dispatch({
      type: GET_SOURCES,
      category
    })

    api.get(`/sources?language=en&category=${category}`)
      .then(response => getSourcesSuccess(dispatch, response, category))
  }
}

const getSourcesSuccess = (dispatch, response, category) => {
  dispatch({
    type: GET_SOURCES_SUCCESS,
    sources: response.data.sources,
    category
  })
}

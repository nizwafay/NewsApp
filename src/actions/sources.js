import {create} from 'apisauce'
import {
  GET_SOURCES,
  GET_SOURCES_SUCCESS
} from './types'

const api = create({baseURL: 'https://newsapi.org/v1'})

export const getSources = (category) => {
  return (dispatch) => {
    dispatch({ type: GET_SOURCES })

    api.get(`/sources?language=en&category=${category}`)
      .then(response => getSourcesSuccess(dispatch, response))
  }
}

const getSourcesSuccess = (dispatch, response) => {
  dispatch({
    type: GET_SOURCES_SUCCESS,
    sources: response.data.sources
  })
}

import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS
} from './types'
import { throwError } from './error'

import { api, apiKey } from '../config'

export const getArticles = (sourceId) => {
  return (dispatch, action) => {
    dispatch({
      type: GET_ARTICLES
    })

    api.get(`/articles?source=${sourceId}&apiKey=${apiKey}`)
      .then(response => {
        if (response.ok) {
          getSourcesSuccess(dispatch, response)
        } else if (response.problem) {
          dispatch(throwError(response.problem, getArticles(sourceId)))
        }
      })
  }
}

const getSourcesSuccess = (dispatch, response) => {
  dispatch({
    type: GET_ARTICLES_SUCCESS,
    articles: response.data.articles
  })
}

import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED
} from './types'

import { api, apiKey } from '../config'

export const getArticles = (sourceId) => {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES
    })

    api.get(`/articles?source=${sourceId}&apiKey=${apiKey}`)
      .then(response => {
        if (response.ok) {
          getSourcesSuccess(dispatch, response)
        } else if (response.problem) {
          dispatch({
            type: GET_ARTICLES_FAILED,
            problem: response.problem
          })
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

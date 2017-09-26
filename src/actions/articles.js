import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS
} from './types'

import { api, apiKey } from '../config'

export const getArticles = (sourceId) => {
  return (dispatch) => {
    dispatch({
      type: GET_ARTICLES
    })

    api.get(`/articles?source=${sourceId}&apiKey=${apiKey}`)
      .then(response => getSourcesSuccess(dispatch, response))
  }
}

const getSourcesSuccess = (dispatch, response) => {
  dispatch({
    type: GET_ARTICLES_SUCCESS,
    articles: response.data.articles
  })
}

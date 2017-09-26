import {create} from 'apisauce'
import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS
} from './types'

const api = create({baseURL: 'https://newsapi.org/v1'})
const apiKey = 'd23fc7c660044940bd51b556d74a9fb0'

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

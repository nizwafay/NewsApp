import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  articles: [],
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...INITIAL_STATE,
        loading: true
      }
    case GET_ARTICLES_SUCCESS:
      return {
        ...INITIAL_STATE,
        articles: action.articles
      }
    default:
      return state
  }
}

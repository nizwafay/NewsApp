import { combineReducers } from 'redux'
import navigation from './navigation'
import articles from './articles'
import sources from './sources'

export default combineReducers({
  sources,
  articles,
  nav: navigation
})

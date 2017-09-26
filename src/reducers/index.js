import { combineReducers } from 'redux'
import navigation from './navigation'
import articles from './articles'
import businessSources from './sources/business'
import politicsSources from './sources/politics'
import technologySources from './sources/technology'

export default combineReducers({
  businessSources,
  politicsSources,
  technologySources,
  articles,
  nav: navigation
})

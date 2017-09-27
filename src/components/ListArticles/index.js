import React, { Component } from 'react'
import { View, FlatList, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import R from 'ramda'

import { getArticles } from '../../actions/articles'

import ArticleBox from './ArticleBox'
import SearchArea from './SearchArea'
import SearchResult from './SearchResult'
import SearchButton from '../common/SearchButton'
import { colors } from '../../themes'
import { haveWords } from '../../utils'

class ListArticles extends Component {
  constructor () {
    super()
    this.state = {
      showSearchField: false,
      searchText: '',
      articles: []
    }
  }

  componentWillMount () {
    this.props.getArticles(this.props.navigation.state.params.sourceId)
  }

  _onRefresh () {
    this.props.getArticles(this.props.navigation.state.params.sourceId)
  }

  componentWillReceiveProps (nextProps) {
    if (!this.state.showSearchField) {
      if (this.state.articles !== nextProps.articles) {
        this.setState({ articles: nextProps.articles })
      }
      if (nextProps.navigation.state.params.showSearchField) {
        this.setState({
          showSearchField: nextProps.navigation.state.params.showSearchField
        })
      }
    }
  }

  renderRow ({ item }) {
    return (
      <ArticleBox
        onPress={() => this.props.webViewScreen(item.url)}
        item={item}
      />
    )
  }

  renderSeparator () {
    return <View style={{ height: 2 }} />
  }

  renderSearch () {
    const { showSearchField, searchText } = this.state
    const { articles } = this.props

    if (showSearchField) {
      return (
        <SearchArea
          value={searchText}
          onChangeText={(searchText) => {
            const checker = (item) => {
              return haveWords(item.title, searchText)
            }
            this.setState({
              searchText,
              articles: R.filter(checker, articles)
            })
            this.refs.flatList.scrollToOffset({ y: 0 })
          }}
          onPressClearButton={() => {
            if (searchText === '') {
              this.setState({
                showSearchField: false
              })
            } else {
              this.setState({
                searchText: '',
                articles: articles
              })
              this.refs.flatList.scrollToOffset({ y: 0 })
            }
          }}
        />
      )
    }
  }

  renderSearchResult () {
    const { showSearchField, searchText, articles } = this.state

    if (showSearchField && searchText.length > 0) {
      return (
        <SearchResult
          articles={articles}
          searchText={searchText}
        />
      )
    }
    return <View style={{ height: 2 }} />
  }

  render () {
    const { articles } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(220, 220, 220)' }}>
        {this.renderSearch()}
        <FlatList
          ref='flatList'
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={this._onRefresh.bind(this)}
              colors={[colors.primary.dark]}
              progressBackgroundColor={colors.white100}
            />
          }
          ItemSeparatorComponent={() => this.renderSeparator()}
          ListHeaderComponent={() => this.renderSearchResult()}
          ListFooterComponent={() => this.renderSeparator()}
          showsVerticalScrollIndicator={false}
          data={articles}
          keyExtractor={item => item.url}
          renderItem={this.renderRow.bind(this)}
          contentContainerStyle={{ paddingHorizontal: 2 }}
        />
      </View>
    )
  }
}

function mapStateToProps ({ articles }) {
  return {
    articles: articles.articles,
    loading: articles.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getArticles: (sourceId) => dispatch(getArticles(sourceId)),
    webViewScreen: (uri) =>
      dispatch(NavigationActions.navigate({
        routeName: 'WebViewScreen',
        params: { uri }
      }))
  }
}

ListArticles.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.sourceName,
    headerRight: (
      <SearchButton
        onPress={() => navigation.setParams({
          showSearchField: true
        })}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListArticles)

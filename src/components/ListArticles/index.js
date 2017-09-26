import React, { Component } from 'react'
import { View, Text, FlatList, TextInput, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Header } from 'react-navigation'
import R from 'ramda'

import { getArticles } from '../../actions/articles'

import WebView from './WebView'
import ArticleBox from './ArticleBox'
import Loading from '../common/Loading'
import { colors } from '../../themes'

class ListArticles extends Component {
  constructor () {
    super()
    this.state = {
      showWebView: false,
      showSearchField: false,
      searchText: '',
      articles: []
    }
  }

  componentWillMount () {
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
        onPress={() => {
          this.setState({
            selectedUrl: item.url,
            showWebView: true
          })
        }}
        item={item}
      />
    )
  }

  renderLoading () {
    if (this.props.loading) {
      return (
        <View style={{ marginTop: 8 }}>
          <Loading />
        </View>
      )
    }
  }

  renderSeparator () {
    return <View style={{ height: 2 }} />
  }

  renderSearch () {
    if (this.state.showSearchField) {
      return (
        <View
          style={{
            height: Header.HEIGHT,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            borderBottomColor: colors.grey,
            borderBottomWidth: 2
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
            <TextInput
              onChangeText={(searchText) => {
                const searchTextLC = searchText.toLowerCase()
                const startsWithM = (item) => {
                  if (searchTextLC === '') return true
                  let title = item.title.toLowerCase()
                  for (let i = 0; i < title.length; i++) {
                    if (title.substr(i, searchTextLC.length) === searchTextLC) return true
                    continue
                  }
                  return false
                }
                this.setState({
                  searchText,
                  articles: R.filter(startsWithM, this.props.articles)
                })
              }}
              placeholder='Search...'
              value={this.state.searchText}
              returnKeyType='search'
              underlineColorAndroid='#FFFFFF'
            />
          </View>
          <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center', padding: 16 }}
            onPress={() => this.setState({ searchText: '' })}
          >
            <Image
              style={{ height: 18, width: 18 }}
              source={require('../../assets/clear.png')}
            />
          </TouchableOpacity>
        </View>
      )
    }
  }

  renderSearchResult () {
    if (this.state.showSearchField && this.state.searchText.length > 0) {
      const texts = () => {
        if (this.state.articles.length === 0) {
          return `No results found for '${this.state.searchText}'`
        }
        return `Found ${this.state.articles.length} articles that contain '${this.state.searchText}'`
      }
      return (
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            paddingVertical: 16
          }}
        >
          {texts()}
        </Text>
      )
    }
    return <View style={{ height: 2 }} />
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(220, 220, 220)' }}>
        <WebView
          visible={this.state.showWebView}
          onRequestClose={() => this.setState({ showWebView: false })}
          url={this.state.selectedUrl}
        />
        {this.renderSearch()}
        {this.renderLoading()}
        <FlatList
          ItemSeparatorComponent={() => this.renderSeparator()}
          ListHeaderComponent={() => this.renderSearchResult()}
          ListFooterComponent={() => this.renderSeparator()}
          showsVerticalScrollIndicator={false}
          data={this.state.articles}
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
    getArticles: (sourceId) => dispatch(getArticles(sourceId))
  }
}

ListArticles.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.sourceName,
    headerRight: (
      <TouchableOpacity
        style={{ padding: 16 }}
        onPress={() => navigation.setParams({
          showSearchField: true
        })}
      >
        <Image
          style={{ height: 22, width: 22 }}
          source={require('../../assets/search.png')}
        />
      </TouchableOpacity>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListArticles)

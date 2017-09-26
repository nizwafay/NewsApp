import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { getSources } from '../../actions/sources'
import { applicationStyles } from '../../themes'

import Loading from '../common/Loading'
import CategoriesBox from './CategoriesBox'
import SourceBox from './SourceBox'

class Sources extends Component {
  componentWillMount () {
    this.props.getSources('business')
  }

  renderRow ({ item, index }) {
    return (
      <SourceBox
        item={item}
        index={index}
        onPress={() => this.props.articlesScreen(item.id, item.name)}
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

  renderCategories () {
    return (
      <CategoriesBox
        onBusinessPressed={() => this.props.getSources('business')}
        onPoliticsPressed={() => this.props.getSources('politics')}
        onTechnologyPressed={() => this.props.getSources('technology')}
      />
    )
  }

  renderSeparator () {
    return <View style={{ height: 8 }} />
  }

  render () {
    return (
      <View style={applicationStyles.container}>
        {this.renderCategories()}
        {this.renderLoading()}
        <FlatList
          ItemSeparatorComponent={() => this.renderSeparator()}
          ListHeaderComponent={() => this.renderSeparator()}
          ListFooterComponent={() => this.renderSeparator()}
          showsVerticalScrollIndicator={false}
          data={this.props.sources}
          numColumns={2}
          initialNumToRender={10}
          keyExtractor={item => item.id}
          renderItem={this.renderRow.bind(this)}
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    sources: state.sources.sources,
    loading: state.sources.loading
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSources: (category) => dispatch(getSources(category)),
    articlesScreen: (sourceId, sourceName) =>
      dispatch(NavigationActions.navigate({
        routeName: 'ListArticlesScreen',
        params: { sourceId, sourceName }
      }))
  }
}

Sources.navigationOptions = {
  title: 'News App'
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources)

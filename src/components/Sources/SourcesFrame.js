import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { applicationStyles } from '../../themes'

import Loading from '../common/Loading'
import SourceBox from './SourceBox'

class SourcesFrame extends Component {
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

  renderSeparator () {
    return <View style={{ height: 8 }} />
  }

  render () {
    return (
      <View style={applicationStyles.container}>
        {this.renderLoading()}
        <FlatList
          style={{ alignSelf: 'flex-start' }}
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

function mapDispatchToProps (dispatch) {
  return {
    articlesScreen: (sourceId, sourceName) =>
      dispatch(NavigationActions.navigate({
        routeName: 'ListArticlesScreen',
        params: { sourceId, sourceName }
      }))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SourcesFrame)

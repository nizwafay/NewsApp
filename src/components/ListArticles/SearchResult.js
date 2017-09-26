import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SearchResult extends Component {
  render () {
    const { articles, searchText } = this.props

    const texts = () => {
      if (articles.length === 0) {
        return `No results found for '${searchText}'`
      }
      return `Found ${articles.length} articles that contain '${searchText}'`
    }

    return (
      <View>
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            paddingVertical: 16
          }}
        >
          {texts()}
        </Text>
      </View>
    )
  }
}

export default SearchResult

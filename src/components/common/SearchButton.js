import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'

class SearchButton extends Component {
  render () {
    return (
      <TouchableOpacity
        style={{ padding: 16 }}
        onPress={this.props.onPress}
      >
        <Image
          style={{ height: 22, width: 22 }}
          source={require('../../assets/search.png')}
        />
      </TouchableOpacity>
    )
  }
}

export default SearchButton

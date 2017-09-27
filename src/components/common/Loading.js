import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../../themes'

class Loading extends Component {
  render () {
    return (
      <ActivityIndicator
        size={this.props.size || 'large'}
        color={colors.primary.dark}
        style={this.props.style}
      />
    )
  }
}

export default Loading

import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../../themes'

class Loading extends Component {
  render () {
    return (
      <ActivityIndicator
        size='large'
        color={colors.primary.dark}
      />
    )
  }
}

export default Loading

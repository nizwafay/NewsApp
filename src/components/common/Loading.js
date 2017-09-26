import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

class Loading extends Component {
  render () {
    return (
      <ActivityIndicator
        size='large'
      />
    )
  }
}

export default Loading

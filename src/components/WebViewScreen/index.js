import React, { Component } from 'react'
import { View, WebView, Text } from 'react-native'

import Loading from '../common/Loading'

import { applicationStyles } from '../../themes'

class WebViewScreen extends Component {
  renderLoading () {
    return (
      <View style={applicationStyles.container}>
        <Loading size={100} />
        <Text style={{ marginTop: 12 }}>
          Loading ...
        </Text>
      </View>
    )
  }

  render () {
    const { navigation } = this.props
    const { uri } = navigation.state.params

    return (
      <WebView
        source={{uri}}
        renderLoading={this.renderLoading}
        renderError={() => <Text>ERROR</Text>}
        startInLoadingState
      />
    )
  }
}

WebViewScreen.navigationOptions = {
  header: false
}

export default WebViewScreen

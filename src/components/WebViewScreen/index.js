import React, { Component } from 'react'
import { View, WebView, Text, ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'

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
        onError={() => {
          this.props.navigation.dispatch(NavigationActions.back())
          ToastAndroid.show('Error occured when open link.', ToastAndroid.SHORT)
        }}
        startInLoadingState
      />
    )
  }
}

WebViewScreen.navigationOptions = {
  header: false
}

export default WebViewScreen

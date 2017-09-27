import React, { Component } from 'react'
import { View, WebView, ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Loading from '../common/Loading'

class WebViewScreen extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }

  renderLoading () {
    if (this.state.loading) {
      return (
        <Loading
          size='small'
          style={{ marginVertical: 4 }}
        />
      )
    }
  }

  render () {
    const { navigation } = this.props
    const { uri } = navigation.state.params

    return (
      <View style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          source={{uri}}
          onLoadStart={() => this.setState({ loading: true })}
          onLoad={() => this.setState({ loading: false })}
          onError={() => {
            this.props.navigation.dispatch(NavigationActions.back())
            ToastAndroid.show('Error occured when open link.', ToastAndroid.SHORT)
          }}
        />
        {this.renderLoading()}
      </View>
    )
  }
}

WebViewScreen.navigationOptions = {
  header: false
}

export default WebViewScreen

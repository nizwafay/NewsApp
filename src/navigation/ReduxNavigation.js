import React from 'react'
import { BackHandler, Alert } from 'react-native'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import { clearError, retryError } from '../actions/error'

class ReduxNavigation extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this))
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.error.error !== null) {
      Alert.alert(
        null,
        nextProps.error.error,
        [
          {
            text: 'Back',
            onPress: () => {
              this.props.dispatch(clearError())
              if (!this.onBackPress()) {
                BackHandler.exitApp()
              }
            },
            style: 'cancel'},
          {text: 'Retry', onPress: () => this.props.dispatch(retryError(nextProps.error.actions))}
        ],
        { cancelable: false }
      )
    }
  }

  onBackPress () {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  };

  render () {
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    })

    return <AppNavigation navigation={navigation} />
  }
}

function mapStateToProps ({ nav, error }) {
  return {
    nav,
    error
  }
}

export default connect(
  mapStateToProps
)(ReduxNavigation)

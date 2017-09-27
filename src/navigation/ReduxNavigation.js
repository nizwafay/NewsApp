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
    if (nextProps.error !== null) {
      Alert.alert(
        null,
        nextProps.error.error,
        [
          {
            text: 'Back',
            onPress: () => {
              this.props.clearError()
              if (!this.onBackPress()) {
                BackHandler.exitApp()
              }
            },
            style: 'cancel'},
          {text: 'Retry', onPress: () => this.props.retryError(nextProps.error.actions)}
        ],
        { cancelable: false }
      )
    }
  }

  onBackPress () {
    const { nav } = this.props
    if (nav.index === 0) {
      return false
    }
    this.props.goBack()
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

function mapDispatchToProps (dispatch) {
  return {
    goBack: () => dispatch(NavigationActions.back()),
    retryError: (actions) => dispatch(retryError(actions)),
    clearError: () => dispatch(clearError())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxNavigation)

import React from 'react'
import { BackHandler, Alert } from 'react-native'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this))
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.error !== '') {
      Alert.alert(
        null,
        nextProps.error,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')}
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

const mapStateToProps = state => ({
  nav: state.nav,
  error: state.error.error
})
export default connect(mapStateToProps)(ReduxNavigation)

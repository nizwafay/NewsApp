import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import ReduxNavigation from './navigation/ReduxNavigation'
import reducers from './reducers'
import { colors } from './themes'

class App extends Component {
  render () {
    const store = createStore(reducers, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={colors.primary.dark}
          />
          <ReduxNavigation />
        </View>
      </Provider>
    )
  }
}

export default App

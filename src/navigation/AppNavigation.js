import { StackNavigator } from 'react-navigation'
import ListArticles from '../components/ListArticles'
import Sources from '../components/Sources'
import WebViewScreen from '../components/WebViewScreen'
import { applicationStyles, colors } from '../themes'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SourcesScreen: { screen: Sources },
  ListArticlesScreen: { screen: ListArticles },
  WebViewScreen: { screen: WebViewScreen }
}, {
  // Default config for all screens
  navigationOptions: {
    headerStyle: {
      backgroundColor: applicationStyles.navigator.backgroundColor
    },
    headerTitleStyle: {
      alignSelf: 'center',
      color: applicationStyles.navigator.fontColor
    },
    headerTintColor: colors.white100
  },
  initialRouteName: 'SourcesScreen',
  headerMode: 'screen'
})

export default PrimaryNav

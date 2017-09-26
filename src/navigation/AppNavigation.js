import { StackNavigator } from 'react-navigation'
import ListArticles from '../components/ListArticles'
import Sources from '../components/Sources'
import { applicationStyles, colors } from '../themes'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SourcesScreen: { screen: Sources },
  ListArticlesScreen: { screen: ListArticles }
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
  initialRouteName: 'SourcesScreen'
})

export default PrimaryNav

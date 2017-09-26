import { StyleSheet } from 'react-native'
import { colors } from '../../../themes'

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 40,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.primary.normal
  },
  categoryBoxStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontCategoryStyle: {
    color: colors.white,
    opacity: 0.79
  }
})

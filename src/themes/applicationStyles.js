import colors from './colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const applicationStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBar: colors.primary.dark,
  navigator: {
    backgroundColor: colors.primary.normal,
    fontColor: colors.white87
  }
}

export default applicationStyles

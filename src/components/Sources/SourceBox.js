import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Dimensions } from 'react-native'
import { colors } from '../../themes'

const cellWidth = (Dimensions.get('window').width - 16) / 2

class SourceBox extends Component {
  render () {
    const { item, index, onPress } = this.props
    const { boxStyle, textStyle } = styles

    const margin = () => {
      if (index % 2 === 0) {
        return {marginRight: 4}
      }
      return {marginLeft: 4}
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.79}
      >
        <View style={[margin(), boxStyle]}>
          <Text style={textStyle}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
  boxStyle: {
    backgroundColor: colors.white100,
    width: cellWidth,
    height: cellWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.black79
  }
}

export default SourceBox

import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Dimensions } from 'react-native'

const cellWidth = (Dimensions.get('window').width - 16) / 2

class SourceBox extends Component {
  render () {
    const { item, index, onPress } = this.props
    const margin = () => {
      if (index % 2 === 0) {
        return {marginRight: 4}
      }
      return {marginLeft: 4}
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[margin(), {
            backgroundColor: '#FFFFFF',
            width: cellWidth,
            height: cellWidth,
            alignItems: 'center',
            justifyContent: 'center'
          }]}
        >
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              textAlignVertical: 'center',
              color: '#000000',
              opacity: 0.79
            }}
          >{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SourceBox

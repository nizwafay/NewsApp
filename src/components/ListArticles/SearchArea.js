import React, { Component } from 'react'
import { TouchableOpacity, Image, TextInput, View } from 'react-native'
import { Header } from 'react-navigation'

import { colors } from '../../themes'

class SearchArea extends Component {
  render () {
    const {
      value, onChangeText,
      onPressClearButton
    } = this.props

    return (
      <View
        style={{
          height: Header.HEIGHT,
          backgroundColor: colors.white100,
          flexDirection: 'row',
          borderBottomColor: colors.grey,
          borderBottomWidth: 2
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
          <TextInput
            onChangeText={onChangeText}
            placeholder='Search...'
            value={value}
            returnKeyType='search'
            underlineColorAndroid={colors.white100}
          />
        </View>
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center', padding: 16 }}
          onPress={onPressClearButton}
        >
          <Image
            style={{ height: 18, width: 18 }}
            source={require('../../assets/clear.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default SearchArea

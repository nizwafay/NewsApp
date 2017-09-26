import React, { Component } from 'react'
import { TouchableNativeFeedback, Text, View, Image, Dimensions } from 'react-native'
import {
  convertDayToString,
  convertMonthToString
} from '../../utils'

const imageWidth = (Dimensions.get('window').width - 16) / 2
const scaleFactor = 1000 / imageWidth
const imageHeigth = 561 / scaleFactor

export default class ArticleBox extends Component {
  render () {
    const { onPress, item } = this.props
    const { description, title, urlToImage } = item

    const time = () => {
      const timeParsed = new Date(item.publishedAt)
      return '' + convertDayToString(timeParsed.getDay()) + ', ' + timeParsed.getDate() + ' ' + convertMonthToString(timeParsed.getMonth()) + ' ' + timeParsed.getFullYear()
    }
    return (
      <TouchableNativeFeedback
        onPress={onPress}
      >
        <View style={{ backgroundColor: '#FFFFFF', padding: 8 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000000' }}>{title}</Text>
          <Text style={{ fontSize: 10 }}>{time()}</Text>
          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Image
              style={{ width: imageWidth, height: imageHeigth, marginRight: 8 }}
              resizeMode='cover'
              source={{uri: urlToImage}}
            />
            <View style={{ flex: 1 }}>
              <Text numberOfLines={6}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

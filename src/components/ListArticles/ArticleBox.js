import React, { Component } from 'react'
import { TouchableNativeFeedback, Text, View, Image, Dimensions } from 'react-native'
import {
  convertDayToString,
  convertMonthToString
} from '../../utils'
import { colors } from '../../themes'

const imageWidth = (Dimensions.get('window').width - 16) / 2
const scaleFactor = 1000 / imageWidth
const imageHeigth = 561 / scaleFactor

export default class ArticleBox extends Component {
  render () {
    const { onPress, item } = this.props
    const { description, title, urlToImage } = item
    const { boxStyle, titleStyle, timeStyle, imageStyle } = styles

    const time = () => {
      const timeParsed = new Date(item.publishedAt)
      return (
        '' +
        convertDayToString(timeParsed.getDay()) + ', ' +
        timeParsed.getDate() + ' ' +
        convertMonthToString(timeParsed.getMonth()) + ' ' +
        timeParsed.getFullYear()
      )
    }
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={boxStyle}>
          <Text style={titleStyle}>
            {title}
          </Text>
          <Text style={timeStyle}>
            {time()}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 4 }}>
            <Image
              style={imageStyle}
              resizeMode='cover'
              source={{uri: urlToImage}}
            />
            <View style={{ flex: 1 }}>
              <Text numberOfLines={6}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = {
  boxStyle: {
    backgroundColor: colors.white100,
    padding: 8
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black100
  },
  timeStyle: {
    fontSize: 10
  },
  imageStyle: {
    width: imageWidth,
    height: imageHeigth,
    marginRight: 8
  }
}

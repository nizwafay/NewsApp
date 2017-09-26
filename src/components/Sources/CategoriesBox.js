import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import styles from './styles/CategoriesBoxStyles'

class CategoryCard extends Component {
  render () {
    const { onPress, title } = this.props
    return (
      <TouchableOpacity
        style={styles.categoryBoxStyle}
        onPress={onPress}
      >
        <Text style={styles.fontCategoryStyle}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}

class CategoriesBox extends Component {
  render () {
    const { onBusinessPressed, onPoliticsPressed, onTechnologyPressed } = this.props
    return (
      <View style={styles.container}>
        <CategoryCard
          title='Business'
          onPress={onBusinessPressed}
        />
        <CategoryCard
          title='Politics'
          onPress={onPoliticsPressed}
        />
        <CategoryCard
          title='Technology'
          onPress={onTechnologyPressed}
        />
      </View>
    )
  }
}

export default CategoriesBox

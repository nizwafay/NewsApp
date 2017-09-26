import React, { Component } from 'react'
import {
  Modal,
  WebView as WebViewRN
} from 'react-native'

export default class WebView extends Component {
  render () {
    const { visible, onRequestClose, url } = this.props
    return (
      <Modal
        transparent
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <WebViewRN source={{uri: url}} />
      </Modal>
    )
  }
}

import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'

class Header extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "rgba(6,129,30,1)",
        }}>
        <Text
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: 'Helvetica Neue',
          }}>
          WoodBox
        </Text>
      </View>
    )
  }
}

export default Header
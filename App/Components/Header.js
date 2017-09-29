import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'

export class Header extends Component {

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
          backgroundColor: "rgba(8,124,19,1)",
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: "bold"
          }}>
          WoodBox
        </Text>
      </View>
    )
  }
}

export default Header
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Header from './App/Components/Header';
import Module from "./App/Components/HomePage/Module";

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header/>
        </View>
        <View style={{flex: 10}}>
          <Text>
            My Text
          </Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Test</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ShapeTe: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

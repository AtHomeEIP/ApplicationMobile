import React from 'react';
import { StackNavigator} from 'react-navigation';

import HomePage from './App/Components/HomePage/HomePage';
import ModulePage from './App/Components/ModulePage/ModulePage';

/*import { StyleSheet, View, Text } from 'react-native';
class HomePage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View>
                <Text>Hello, Chat App!</Text>
            </View>
        );
    }
}*/

const AtHomeScreens = StackNavigator({
    Home: { screen: HomePage },
    Module: { screen: ModulePage }
});

export default class App extends React.Component {
    render() {
        return <AtHomeScreens />;
    }
}
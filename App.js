import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModuleCard from './App/Components/HomePage/ModuleCard'

export default class App extends React.Component {

    state = { fontsAreLoaded: false };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf')
        });
        this.setState({fontsAreLoaded: true});
    }

    render() {
        if (this.state.fontsAreLoaded)
            return (
                <Container>
                    <Header>
                        <Body>
                            <Title>WoodBox</Title>
                        </Body>
                    </Header>
                    <Content>
                        <Text>
                            List modules WoodBox
                        </Text>
                        <ModuleCard location={"Chambre"} type={"Humidité"}/>
                    </Content>
                </Container>
            );
        else
            return (
                <View>

                </View>
            );
    }
}

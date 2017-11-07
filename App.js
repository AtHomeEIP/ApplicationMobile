import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ModuleCard from "./App/Components/HomePage/ModuleCard";
import ModulePage from "./App/Components/ModulePage/ModulePage";
export default class App extends React.Component {

    state = { fontsAreLoaded: false };

    enumState={
        Warning: 0,
        Risk: 1,
        Healthy : 2
    };

    ModuleList = [
        {
            room: 'Living room',
            type: 'Humidity',
            state: this.enumState.Warning
        },
        {
            room: 'Living room',
            type: 'Light',
            state: this.enumState.Warning
        },
        {
            room: 'Child\'s bedroom',
            type: 'Humidity',
            state: this.enumState.Healthy
        },
        {
            room: 'Kitchen',
            type: 'Light',
            state: this.enumState.Risk
        }
    ];

    BuildStateModuleList(state){
        let ModuleList = [];
        for (let i = 0; i < this.ModuleList.length; i++) {
            if (this.ModuleList[i].state == state) {
                ModuleList.push(this.ModuleList[i])
            }
        }
        return ModuleList;
    }

    WarningModuleList = this.BuildStateModuleList(this.enumState.Warning);
    RiskModuleList = this.BuildStateModuleList(this.enumState.Risk);
    HealthyModuleList = this.BuildStateModuleList(this.enumState.Healthy);
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
                        <ModuleCard WarningModules={this.WarningModuleList} RiskModules={this.RiskModuleList} HealthyModules={this.HealthyModuleList}/>
                        <ModulePage headerBodyTitle={"title"} room={"room"} mode={1}/>
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

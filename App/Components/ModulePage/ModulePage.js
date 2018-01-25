import React, { Component } from 'react';
import {Image} from 'react-native'
import {
    Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge, Button, Thumbnail,
    Title, View
} from 'native-base';
import ModulePageGeneralContent from './ModulePageGeneralContent'
import LineChart from "../Charts/LineChart";

/**
 * props: headerBodyTitle, room, mode, sensorType
 */

// TODO add event handler to child component to update view on button click
export default class ModulePage extends React.Component {

    state = {
        fontsAreLoaded: false
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf')
        });
        this.setState({
            fontsAreLoaded: true,
            mode: this.props.mode
        });
    }

    render () {
            var output;
            switch (this.state.mode) {
                case 1:
                    output = <ModulePageGeneralContent headerBodyTitle={this.props.headerBodyTitle} room={this.props.room}/>;
                    break;
                case 2:
                    output = <View>
                                <Text>Label 1</Text>
                                <LineChart/>
                                <Text style={{textAlign: 'right'}}>Label 2 </Text>
                            </View>;
                    break;
                default:
                    output = <Text>erreur</Text>;
            }
            return (
                <Container>
                    <Header>
                        <Body>
                        <Title>
                            {this.props.headerBodyTitle}
                        </Title>
                        </Body>
                    </Header>
                    {output}
                </Container>
            );
    }
}
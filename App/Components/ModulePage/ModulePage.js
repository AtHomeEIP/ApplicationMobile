import React, { Component } from 'react';
import {Image} from 'react-native'
import {
    Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge, Button, Thumbnail,
    Title, View
} from 'native-base';

import ModulePageGeneralContent from './ModulePageGeneralContent'
import LineChart from "../Charts/LineChart";
import ModulePageLineChart from "./ModulePageLineChart";

/**
 * props: headerBodyTitle, room, mode, sensorType
 */

// TODO add event handler to child component to update view on button click
export default class ModulePage extends React.Component {

    constructor(props){
        super(props);

        //Way to get props from navigator
        this.navigationProps = this.props.navigation.state.params;
    }

    static navigationOptions = {
        title: 'Module'
    };

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
            mode: this.navigationProps.mode
        });
    }

    render () {
            var output;
            switch (this.state.mode) {
                case 1:
                    output = <ModulePageGeneralContent headerBodyTitle={this.navigationProps.headerBodyTitle} room={this.navigationProps.room}/>;
                    break;
                case 2:
                    output = <ModulePageLineChart labelAxisY={"Data"} labelAxisX={"Time"}/>;
                    break;
                default:
                    output = <Text>erreur</Text>;
            }
            return (
                <Container>
                    <Header>
                        <Body>
                        <Title>
                            {this.navigationProps.headerBodyTitle}
                        </Title>
                        </Body>
                    </Header>
                    {output}
                </Container>
            );
    }
}
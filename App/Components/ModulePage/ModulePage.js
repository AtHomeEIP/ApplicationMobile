import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge, Button, Thumbnail, Title} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ModulePageGeneralContent from './ModulePageGeneralContent'


/**
 * props: headerBodyTitle, room, mode
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
        if (this.state.fontsAreLoaded){
            var output;
            if (this.state.mode == 1)
                output = <ModulePageGeneralContent headerBodyTitle={this.props.headerBodyTitle} room={this.props.room}/>;
            else
                output = <Text>erreur</Text>;
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
        return (
            <Container>

            </Container>
        );
    }
}
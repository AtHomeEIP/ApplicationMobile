import React, { Component } from 'react';
import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ModuleCard extends React.Component {

    state = { fontsAreLoaded: false };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf')
        });
        this.setState({fontsAreLoaded: true});
    }

    render () {
        if (this.state.fontsAreLoaded)
            return (
                <Container>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>{this.props.location}</Text>
                                    <Text>{this.props.type}</Text>
                                </Body>
                                <Right>
                                    <Icon name='warning' style={{color: 'red', fontSize: 50}}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
          );

        return (
            <Container>

            </Container>
        );
    }
}
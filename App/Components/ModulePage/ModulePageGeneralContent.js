import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge, Button, Thumbnail, Title} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ModulePageGeneralContent extends React.Component {
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

    render() {
        if (this.state.fontsAreLoaded) {
            return (
                <Grid style={{
                    flexDirection: 'column',
                    flex: 1
                }}>
                    <Row style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>
                            {this.props.room}
                        </Text>
                    </Row>
                    <Row style={{
                        backgroundColor: '#77d700',
                        flex: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            resizeMode="contain"
                            style={{
                                alignSelf: 'stretch',
                                flex: 1,
                                width: undefined,
                                height: undefined
                            }}
                            source={require('../../../assets/tileOk.png')}
                        />
                    </Row>
                    <Row style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Content>
                            <Button block rounded primary>
                                <Text>Configuration</Text>
                            </Button>
                        </Content>
                    </Row>
                    <Row style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Content>
                            <Button block rounded primary style={{flex: 1}}>
                                <Text>En savoir plus</Text>
                            </Button>
                        </Content>
                    </Row>
                    <Row style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Content>
                            <Button block rounded primary style={{flex: 1}}>
                                <Text>Données</Text>
                            </Button>
                        </Content>
                    </Row>
                    <Row style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Content>
                            <Button block rounded primary style={{flex: 1}}>
                                <Text>Solutions</Text>
                            </Button>
                        </Content>
                    </Row>
                </Grid>
            );
        }
        return (
            <Container/>
        );
    }
}
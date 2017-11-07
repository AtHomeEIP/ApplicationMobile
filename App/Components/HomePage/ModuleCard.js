import React, { Component } from 'react';
import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge } from 'native-base';

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
        return (
            <Container>
                <Content>
                    <Text>Modules ayant détéctés un danger</Text>
                    <Card dataArray={this.props.WarningModules} renderRow={(module) =>
                        <CardItem style={styles.card}>
                            <Body>
                                <Text>{module.room}</Text>
                                <Text>{module.type}</Text>
                            </Body>
                            <Right>
                                <Icon name='warning' style={{color: 'red', fontSize: 50}}/>
                            </Right>
                        </CardItem>}>
                    </Card>
                    <Text>Modules ayant détéctés un problème</Text>
                    <Card dataArray={this.props.RiskModules} renderRow={(module) =>
                        <CardItem>
                            <Body>
                                <Text>{module.room}</Text>
                                <Text>{module.type}</Text>
                            </Body>
                            <Right>
                                <Icon name='warning' style={{color: 'yellow', fontSize: 50}}/>
                            </Right>
                        </CardItem>}>
                    </Card>
                    <Text>Modules sains</Text>
                    <Card dataArray={this.props.HealthyModules} renderRow={(module) =>
                        <CardItem>
                            <Body>
                                <Text>{module.room}</Text>
                                <Text>{module.type}</Text>
                            </Body>
                            <Right>
                                <Icon name='warning' style={{color: 'green', fontSize: 50}}/>
                            </Right>
                        </CardItem>}>
                    </Card>
                </Content>
            </Container>
      );
    }

    styles = Stylesheet.create({
        card: {
            bordered: true
        },
    });
}
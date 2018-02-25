import React from 'react';
import { StyleSheet, View, Button } from 'react-native'

import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge } from 'native-base';

//import ModuleCard from './ModuleCard'


class ModuleCard extends React.Component {
    render () {
        return (
            <CardItem button onPress={() => this.props.Navigate('Module')}>
                <Body>
                <Text>{this.props.Module.room}</Text>
                <Text>{this.props.Module.type}</Text>
                </Body>
                <Right>
                    <Text>State</Text>
                </Right>
            </CardItem>
        );
    }
}

export default class HomePage extends React.Component {

    static navigationOptions = {
        title: 'AtHome'
    };

    ModuleList = [
        {
            room: 'Living room',
            type: 'Humidity',
        },
        {
            room: 'Living room',
            type: 'Light',
        },
        {
            room: 'Child\'s bedroom',
            type: 'Humidity',
        },
        {
            room: 'Kitchen',
            type: 'Light',
        }
    ];


    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Content>
                    <Text>
                        List modules WoodBox
                    </Text>
                    <Card dataArray={this.ModuleList} renderRow={(Module) =>
                        <ModuleCard Module={Module} Navigate={navigate}/>}>
                    </Card>
                    <Button
                        onPress={() => navigate('TestApollo')}
                        title= 'Test Apollo'
                    />
                </Content>
            </Container>
        );
    }

    /*render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                onPress= {() => navigate('Module')}
                title= 'Module'/>
        );
    }*/
}

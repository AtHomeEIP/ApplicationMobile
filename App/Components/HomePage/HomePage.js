import React from 'react';
import { StyleSheet, View, Button } from 'react-native'

import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge } from 'native-base';
import {InMemoryCache} from "apollo-cache-inmemory/lib/index";
import {ApolloClient} from "apollo-client/index";
import gql from "graphql-tag";
import {HttpLink} from "apollo-link-http/lib/index";

//import ModuleCard from './ModuleCard'


class ModuleCard extends React.Component {
    render () {
        return (
            <CardItem button onPress={() => this.props.navigate('Module', {
                headerBodyTitle: this.props.module.name,
                room: this.props.module.room,
                mode: 1,
                sensorType: this.props.module.type
            })}>
                <Body>
                <Text>{this.props.module.name}</Text>
                <Text>{this.props.module.type}</Text>
                </Body>
                <Right>
                    <Text>{this.props.module.location}</Text>
                </Right>
            </CardItem>
        );
    }
}

export default class HomePage extends React.Component {

    static navigationOptions = {
        title: 'AtHome'
    };

    modules = [];

    state = {
        modulesLoaded: false
    };


    constructor(props){
        super(props);

    }

    getModules() {
        client = new ApolloClient({
            link: new HttpLink({ uri: 'http://lferry.xyz:8080/graphql' }),
            cache: new InMemoryCache()
        });

        client.query({
            query: gql`
                query getAllModules {
                    allModules {
                        id: id,
                        name: name,
                        type: type,
                        location: location
                    }
                }
            `,
        }).then(data => {
            allModules = data.data.allModules;

            console.log('Debug getAllModules Request');
            console.log(allModules);
            for (i = 0; i < allModules.length; i++) {
                this.modules[i] = {
                    name: allModules[i].name,
                    type: allModules[i].type,
                    location: allModules[i].location
                }
            }
            this.setState({
                modulesLoaded: true
            });
        })
            .catch(error => console.log(error))
    }

    async componentWillMount() {
        this.getModules();
    }

    render () {
        const { navigate } = this.props.navigation;

        if (this.state.modulesLoaded === false){
            return (
                <Expo.AppLoading/>
            );
        }
        return (
            <Container>
                <Text>
                    Test Apollo
                </Text>
                <Button
                    title='Test Props on navigation'
                    onPress={()=>{
                        navigate('TestApollo', {
                            Test: 'Test'
                        })
                    }}
                />
                <Card dataArray={this.modules} renderRow={(module) =>
                    <ModuleCard module={module} navigate={navigate}/> }>
                </Card>

            </Container>
        );
    }
}

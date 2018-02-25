import React  from 'react';
import { StyleSheet, View, Button } from 'react-native'

import { Container, Header, Footer, Content, Card, CardItem, Body, Text, Left, Right, Icon, Badge } from 'native-base';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


class ModuleCard extends React.Component {
    render () {
        return (
            <CardItem>
                {console.log("Module")}
                {console.log(this.props.module)}
                <Body>
                <Text>Module</Text>
                <Text>{this.props.module.room}</Text>
                <Text>{this.props.module.type}</Text>
                </Body>
                <Right>
                    <Text>{this.props.module.location}</Text>
                </Right>
            </CardItem>
        );
    }
}

export default class TestApollo extends React.Component {

    modules = [];

    constructor(...args) {
        super(...args);

        const client = new ApolloClient({
            link: new HttpLink({ uri: 'http://lferry.xyz:8080/graphql' }),
            cache: new InMemoryCache()
        });

        client.query({
            query: gql`
                query getAllModules {
                    allModules {
                        id: id,
                        room: name,
                        type: type,
                        location: location
                    }
                }
            `,
        }).then(data => {
            allModules = data.data.allModules;

            for (i = 0; i < allModules.length; i++) {
                this.modules[i] = {
                    room: allModules[i].room,
                    type: allModules[i].type,
                    location: allModules[i].location
                }
            }
        })
            .catch(error => console.log(error))
    }

    render () {
        return (
            <Container>
                <Text>
                    Test Apollo
                </Text>

                {console.log("Modules list before setup")}
                {console.log(this.modules)}
                <Card dataArray={this.modules} renderRow={(module) =>
                    <ModuleCard module={module} />}>
                </Card>
                <Button
                    onPress={() => console.log(this.modules)}
                    title= 'Refresh'
                />
            </Container>
        );

    }
}
import React  from 'react';

import { Container, Content, Text } from 'native-base';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


export default class TestApollo extends React.Component {

    Data;

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
                        name: id, type, location, id
                    }
                }
            `,
        }).then(data => console.log(data))
            .catch(error => console.log(error))
    }

    render () {
        return (
            <Container>
                <Content>
                    <Text>
                       Test Apollo
                    </Text>
                </Content>
            </Container>
        );

    }
}
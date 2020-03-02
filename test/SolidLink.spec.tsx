import { ApolloClient } from 'apollo-client'
import SolidLink from '../src/SolidLink'
import gql from "graphql-tag";
import { InMemoryCache } from 'apollo-cache-inmemory';
describe('SolidLink', () => {
  it('should work with an ApolloClient to execute GraphQL queries', async () => {
    const context = {
      "@context": {
        "foaf": "http://xmlns.com/foaf/0.1/",
        "name": "foaf:name"
      }
    };

    const query = gql`
  query @single(scope: all) {
    id
    name
  }`;


    const client = new ApolloClient({
      cache: new InMemoryCache({ addTypename: false }),
      link: new SolidLink(context, ["https://tvachon.inrupt.net/profile/card#me"])
    })
    const { data } = await client.query({ query })
    expect(data).toEqual({
      id: "https://tvachon.inrupt.net/profile/card#me",
      name: "Travis Vachon"
    })
  })
})

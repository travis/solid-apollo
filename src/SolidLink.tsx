import { ApolloLink, Observable, Operation, FetchResult } from 'apollo-link';
import {Client} from "graphql-ld";
import { QueryEngineComunicaSolid } from "graphql-ld-comunica-solid";
import { JsonLdContext } from "jsonld-context-parser";
import { print } from 'graphql/language/printer';

export default class SolidLink extends ApolloLink {
  public client: Client;
  constructor(context: JsonLdContext, sources: string[]) {
    super();
    this.client = new Client({ context, queryEngine: new QueryEngineComunicaSolid({sources}) });
  }
  request(operation: Operation) {
    const runQuery = this.client.query({query: print(operation.query)})
    return new Observable<FetchResult>(observer => {
        runQuery.then(response => {
          operation.setContext({ response })
          observer.next(response)
          observer.complete()
        }).catch(err => {
          observer.error(err)
        })
    })
  }
}

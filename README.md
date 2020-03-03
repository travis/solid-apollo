# solid-apollo

[![npm version][npmv-image]][npmv-url]
[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]
[![npm downloads][npmd-image]][npmd-url]

> apollo client for solid

## Basic Usage

```jsx
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client'
import { SolidLink } from 'solid-apollo'

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: new SolidLink(context, ["https://tvachon.inrupt.net/profile/card#me"])
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
    </div>
  </ApolloProvider>
);
```

See https://github.com/travis/solid-apollo-example/ for a working example.

## Installation

```
$ npm install solid-apollo
```

## License

Hippocratic License

[travis-image]: https://img.shields.io/travis/travis/solid-apollo/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/travis/solid-apollo
[codecov-image]: https://img.shields.io/codecov/c/github/travis/solid-apollo.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/travis/solid-apollo
[npmv-image]: https://img.shields.io/npm/v/solid-apollo.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/solid-apollo
[npmd-image]: https://img.shields.io/npm/dm/solid-apollo.svg?style=flat-square
[npmd-url]: https://www.npmjs.com/package/solid-apollo

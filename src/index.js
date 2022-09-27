import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';
import './styles/index.scss';

const client = new ApolloClient({
  uri: 'https://freaks-catalog.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
//require('dotenv').config();


// const getToken = () => {
//   let token = localStorage.getItem('token');
//   return token ? `Bearer ${token}` : '';
// };

// const client = new ApolloClient({
//   uri: 'https://quality-hub-gateway-staging.herokuapp.com/',
//   request: operation => {
//     operation.setContext({
//       headers: {
//         Authorization: getToken(),
//       },
//     });
//   },
// });

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Router>
//       <App />
//     </Router>
//   </ApolloProvider>,
//   document.getElementById('root'),
// );

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
  
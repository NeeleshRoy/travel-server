import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { request } from 'graphql-request';

const query = `
mutation {
  createPlan(planInput: {name: "Sample plan 3", overview: "Sample overview 3", location: "Gua, India", price: "12902.99", minPrice: "2442.89", days: 2, consultantId: "5ee3d070a4a41b8e2a14dc92"}) {
    name
    overview
  }
}
`

request("/graphql", query)
  .then(console.log)
  .catch(console.error);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { loadIssues, loadUsers } from './actions/actions';
import { Provider } from 'react-redux';


const store = configureStore();
store.dispatch(loadIssues());
store.dispatch(loadUsers());


ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


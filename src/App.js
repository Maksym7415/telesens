import React from 'react';
import './App.css';
import store from './redux'
import { Provider } from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import RootPage from './app/rootPage'

function App() {
  return (
    <Provider store = {store}>
      <Router history = {createHistory()}>
        <RootPage/>
      </Router>
    </Provider>
  );
}

export default App;

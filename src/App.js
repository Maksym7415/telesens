import React from 'react';
import './App.css';
import store from './redux'
import { Provider } from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import RootPage from './app/rootPage'
import Header from './app/rootPage/components/header'
import Login from './app/authorization/login'
import News from './app/newsPage/news'
import SongInfo from './app/songInfo/songInfo'
import Profile from './app/profile'
import BuySong from './app/buySong'

function App() {
  return (
    <Provider store = {store}>
      <Router history = {createHistory()}>
        <Header/>
        <Switch>
          <Route path='/' exact component= {RootPage}/>
          <Route path= '/news' exact component= {News}/>
          <Route path= '/profile' exact component= {Profile}/>
          <Route path= '/login' exact component = {Login}/>
          <Route path= '/info/:param/:param' exact component = {SongInfo}/>
          <Route path= '/buy/:param/:param' exact component= {BuySong}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

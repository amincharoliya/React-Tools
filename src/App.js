import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom' 

import Header from './components/header';
import Footer from './components/footer';

import ToolListing from './components/tool-listing';
import TodoApp from './components/todoapp';
import WeatherApp from './components/weatherapp';

import './css/app.scss';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={ToolListing} />
            <Route exact path="/weather-app" component={WeatherApp} />
            <Route path="/todo" component={TodoApp} />
          </Switch>
          <Footer />
          </div>
      </Router>
    </div>
    );
  }
}

export default App;

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ToolListing from './components/tool-listing';
import TodoApp from './components/todo-app/todoapp';
import WeatherApp from './components/weather-app/weatherapp';
import CurrencyApp from './components/currency/currency';
import './css/app.scss';

const App = () => (
  <>
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={ToolListing} />
          <Route exact path="/weather-app" component={WeatherApp} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/currency" component={CurrencyApp} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </>
);

export default App;

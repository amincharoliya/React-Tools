import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ToolListing from './components/tool-listing';
import TodoApp from './components/todo-app/todoapp';
import WeatherApp from './components/weather-app/weatherapp';
import Secret from './components/secret-app/secrets';
import CreateSecret from './components/secret-app/create_secret';
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
          <Route path="/secrets" component={Secret} />
          <Route path="/add-secret" component={CreateSecret} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </>
);

export default App;

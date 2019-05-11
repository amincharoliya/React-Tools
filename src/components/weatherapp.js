/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component, Fragment } from 'react';
import Helmet, { HelmetProvider } from 'react-helmet-async';

import '../css/weather.scss';
import WeatherResult from './weather-result';

class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weatherData: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({
      loading: true,
    });
    const APIkey = '99ab21726dbae62a3b7d9ee073dff383'; // This API free with limited calls, Please don't use it 😟
    // eslint-disable-next-line react/destructuring-assignment
    const APIURL = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=${APIkey}&units=metric`;
    this.setState({ location: '' });
    fetch(APIURL)
      .then(res => res.json())
      .then((content) => {
        this.setState({ weatherData: content });
        this.setState({ loading: false });
      });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  render() {
    const { loading, location, weatherData } = this.state;
    return (
      <Fragment>
        <HelmetProvider>
          <Helmet>
            <title>Weather App | React Tools</title>
            <meta name="description" content="Check live weather" />
          </Helmet>
        </HelmetProvider>
        <div className="wrapper">
          <div className="weather-app">
            <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
              <label htmlFor="location">
                <span>Enter your Location</span>
                <input type="text" id="location" name="location" value={location} onChange={e => this.handleChange(e)} placeholder="ex: Delhi" required="required" />
              </label>
              <button type="submit">Submit</button>
            </form>
            <div className={`lds-ellipsis ${loading ? 'show' : 'hidden'}`}><div></div><div></div><div></div><div></div></div>
            <WeatherResult data={weatherData} />
            {loading}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WeatherApp;

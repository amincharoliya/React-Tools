import React from 'react';
import Helmet, { HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ToolListing = () => (
  <HelmetProvider>
    <Helmet>
      <title>Welcome to React Tools!</title>
      <meta name="description" content="Find cool tools developed with react." />
    </Helmet>

    <div className="wrapper">
      <ul className="tool-listing">
        <li>
          <h2><Link to="/currency">Currency Converter</Link></h2>
          <p>
            Convert Currency
            <span role="img" aria-label="Currency Converter">💱</span>
          </p>
          <Link to="/currency" rel="nofollow" />
        </li>
        <li>
          <h2><Link to="/weather-app">Weather App</Link></h2>
          <p>
            Check how&apos;s the weather today
            <span role="img" aria-label="Hert Eyes"> 🌤 </span>
          </p>
          <Link to="/weather-app" rel="nofollow" />
        </li>
        <li>
          <h2><Link to="todo">Todo App</Link></h2>
          <p>
            Todo list App developed using React hooks
            <span role="img" aria-label="Hert Eyes"> 😍 </span>
          </p>
          <Link to="/todo" rel="nofollow" />
        </li>
      </ul>
    </div>
  </HelmetProvider>
);

export default ToolListing;

import React from 'react';
import Helmet,{ HelmetProvider  } from 'react-helmet-async';
import {Link} from 'react-router-dom';

const ToolListing = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Welcome to React Tools!</title>
                <meta name="description" content="Find cool tools developed with react." />
            </Helmet>
        
            <div className="wrapper">
                <ul className="tool-listing">
                    <li>
                        <h2><Link to="/weather-app">Weather App</Link></h2>
                        <p>Check how's the weather today 🌤</p>
                        <Link to="/weather-app" rel="nofollow"></Link>
                    </li>
                    <li>
                        <h2><Link to="todo">Todo App</Link></h2>
                        <p>Todo list App developed using React hooks 😍</p>
                        <Link to="/todo" rel="nofollow"></Link>
                    </li>
                    <li>
                        <h2><a href="/">Converter</a></h2>
                        <p>Convert units quickly.</p>
                    </li>
                </ul>
            </div>
        </HelmetProvider>
    )
}

export default ToolListing;
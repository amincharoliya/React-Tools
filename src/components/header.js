import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss';

const Header = () => (
  <header className="header">
    <h1><Link to="/">React Tools</Link></h1>
  </header>
);

export default Header;

import React, { Component } from 'react';
import styles from './index.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return(
      <div className="header">
        HomePage
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default HomePage;
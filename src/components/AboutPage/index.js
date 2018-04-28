import React, { Component } from 'react';
import styles from './index.css';
import { Link } from 'react-router-dom';

class AboutPage extends Component {
  render() {
    return(
      <div className="header">
        AboutPage
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default AboutPage;
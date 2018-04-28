import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Router from './components/Router';
import { Player } from 'video-react'; 
import video from './saturn-rising.mp4';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
       </Player>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header title="New Title" />
          <h1 className="App-title">Welcome to Bakari's World</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

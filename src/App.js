import React, { Component } from 'react';
import Bio from './components/Bio/Bio';
import PortfolioList from './components/PortfolioList/PortfolioList';
//import logo from './logo.svg';
import './App.css';
import { portfolios }  from './portfolios';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Bio />
        <PortfolioList portfolios={portfolios}/>
      </div>
    );
  }
}

export default App;

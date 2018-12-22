import React, { Component } from 'react';
import Bio from './components/Bio/Bio';
import PortfolioList from './components/PortfolioList/PortfolioList';
import SearchBox from './components/SearchBox/SearchBox';
//import logo from './logo.svg';
import './App.css';
import { portfolios }  from './portfolios';



class App extends Component {
	constructor() {
		super()
		this.state = {
			portfolios: portfolios,
			searchInput:''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchInput: event.target.value})
		
			}

  render() {
  	const filteredPortfolios = this.state.portfolios.filter(portfolios => {
				return portfolios.appname.toLowerCase().includes(this.state.searchInput.toLowerCase())
				})
	 return (
      <div>
        <Bio />
        <SearchBox searchChange={this.onSearchChange} />
        <PortfolioList portfolios={filteredPortfolios}/>
      </div>
    );
  }
}

export default App;

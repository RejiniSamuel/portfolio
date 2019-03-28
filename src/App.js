import React, { Component } from "react";
import Bio from "./components/Bio/Bio";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import SkillsList from "./components/SkillsList/SkillsList";
import SearchBox from "./components/SearchBox/SearchBox";
//import OtherProject from "./components/OtherProjects/OtherProject";
//import UserInput from './components/UserInput/UserInput';
//import UserOutput from './components/UserOutput/UserOutput';
//import ControlledCarousel from './components/ControlledCarousel/ControlledCarousel';

//import MapTest from './components/MapTest/MapTest';
//import MapContainer from './components/MapContainer/MapContainer';
//import logo from './logo.svg';
import "./App.css";
import { portfolios } from "./portfolios";
import { skills } from "./skills";
import { otherprojectslist } from "./otherprojectslist";
import OtherProjectsList from "./components/OtherProjectsList/OtherProjectsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolios: portfolios,
      searchInput: "",
      userName: "Rejini",
      showPortfolios: true
    };
  }

  onUserInputChange = event => {
    this.setState({ userName: event.target.value });
  };

  onSearchChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const filteredPortfolios = this.state.portfolios.filter(portfolios => {
      return portfolios.appname
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    let ports = null;
    if (this.state.showPortfolios) {
      ports = (
        <div>
          <h2>Portfolio</h2>
          <SearchBox searchChange={this.onSearchChange} />
          <PortfolioList portfolios={filteredPortfolios} />
        </div>
      );
    }

    return (
      <div className="App">
        <Bio />

        <SkillsList skills={skills} />
        <h2>Other Projects</h2>
        <OtherProjectsList otherprojectslist={otherprojectslist} />
        {ports}
      </div>
    );
  }
}

//     	<UserInput userInputChange={this.onUserInputChange}/>
// <UserOutput userName={this.state.userName}/>

// togglePortfolioHandler = () => {
// 	const doesShow = this.state.showPortfolios;
// 	this.setState({showPortfolios: !doesShow });

// }

//	<button onClick={this.togglePortfolioHandler}>Toggle Portfolios</button>
// { this.state.showPortfolios===true ? 'wrap the div here'  : null

export default App;

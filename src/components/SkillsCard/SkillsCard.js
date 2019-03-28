import React from "react";
//import { Button } from 'react-bootstrap';
//import sea from '../../assets/flowers.jpg';
//import PortfolioCard from '../PortfolioCard/PortfolioCard';
//import './App.css';

const SkillsCard = ({ id, appname, appDesc }) => {
  return (
    <div className="cards tc dib o-100 br3 pa1 ma2 grow shadow-5 ba b--black-5">
      <div className="lh-copy measure center f6 black-100">
        <div>
          <p className="f4"> {appname} </p>
          <p className="center o-80">{appDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

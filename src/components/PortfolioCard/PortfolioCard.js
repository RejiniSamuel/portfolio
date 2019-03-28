import React from "react";
//import { Button } from 'react-bootstrap';
//import sea from '../../assets/flowers.jpg';
//import PortfolioCard from '../PortfolioCard/PortfolioCard';
//import './App.css';

const PortfolioCard = ({ id, appname, appurl, appDesc }) => {
  return (
    // <div>
    <div className="cards tc dib o-100 br3 pa1 ma2 grow shadow-5 ba b--black-5">
      <div className="lh-copy measure center f6 black-100">
        <div>
          <a className="black-100 f2" href={appurl}>
            {" "}
            {appname}{" "}
          </a>
          <p className="center o-100">{appDesc}</p>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default PortfolioCard;

import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';
import PortfolioCard from '../PortfolioCard/PortfolioCard';


const PortfolioList = ({portfolios}) => {
    return (
            <div className = 'f3'>
               <h1>Portfolio</h1>
               {
               portfolios.map((portfolio,i) => {
               	return (
                    <PortfolioCard 
                    key={portfolios[i].id}
                    id={portfolios[i].id}
                    appname={portfolios[i].appname}
                    appurl={portfolios[i].appurl}
                    />
                    );
                })
               }
            </div>
          );
  }

export default PortfolioList;
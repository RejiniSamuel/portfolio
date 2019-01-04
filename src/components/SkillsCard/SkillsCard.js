import React from 'react';
//import { Button } from 'react-bootstrap';
//import sea from '../../assets/flowers.jpg';
//import PortfolioCard from '../PortfolioCard/PortfolioCard';
//import './App.css';


const SkillsCard = ({id, appname, appDesc}) => {
    return (

            <div className="tc dib o-60 bg-purple br3 pa1 ma2 grow shadow-5 ba b--black-5">
                <p className="lh-copy measure center f6 black-100">
                
                    <div>
                      
                      <p className="f4"> {appname} </p>
                       <p className="center o-100">{appDesc}</p>
                    </div>
                 </p>
       </div>

          );
  }

export default SkillsCard; 


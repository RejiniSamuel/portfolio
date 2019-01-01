import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';


const PortfolioCard = ({id, appname, appurl, appDesc}) => {
    return (
            <div className="tc dib bg-white br3 pa1 ma2 grow shadow-5 ba b--black-5">
                <p className="lh-copy measure center f6 black-70">
                <h3></h3>
                    <div >
                  
                      <h2>{appname}</h2>
                      <a href={`https://${appurl}`}> {appurl} </a>
                      <p className="lh-copy measure center f6 black-70">{appDesc}</p>
                    </div>
                 </p>
            </div>

          );
  }

export default PortfolioCard;

//  <img alt='' src={`https://robohash.org/${id}?200x200'`} />
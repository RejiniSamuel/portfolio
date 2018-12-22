import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';


const PortfolioCard = ({id, appname, appurl}) => {
    return (
            <div className="tc dib bg-white br3 pa3 ma2 grow shadow-5 ba b--black-10">
                <p className="lh-copy measure center f6 black-70">
                <h3>Portfolio Card</h3>
                    <div >
                    <img alt='' src={`https://robohash.org/${id}?200x200'`} />
                      <h2>{appname}</h2>
                      <h2>{appurl}</h2>
                    </div>
                 </p>
            </div>

          );
  }

export default PortfolioCard;
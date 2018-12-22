import React from 'react';
import rejiniPic from './rejiniPic.png';
//import './App.css';


const Bio = () => {
    return (
         <div className = 'tc f3'>
               <h1>Bio</h1>
                 
                  <p className="lh-copy measure center f6 black-70"></p>
                  <article className="mw5 bg-white br3 pa3 center shadow-5 pa4-ns mv3 ba b--black-10">
						  <div className="pa2">
						    <img alt='' src={rejiniPic} className="br-100 h3 w3 dib" title="" />
						    <h1 className="f4">Rejini Samuel</h1>
						      <p className="lh-copy measure center f6 black-70">
    This is where the text for the Bio will go.
  </p>
						    <hr className="mw3 bb bw1 b--black-10" /> 
						  </div>

</article>
            </div>
          );
  }

export default Bio;
import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';



const SearchBox = ({searchInput, searchChange}) => {
    return (
            <div className = 'tc pa2'>
              <input 
              classname='pa2'
                type='search' 
                placeholder='Search apps' 
                onChange={searchChange}/>
            </div>
          );
  }

export default SearchBox;
import React from 'react';
//import rejiniPic from './rejiniPic.png';
//import './App.css';
import SkillsCard from '../SkillsCard/SkillsCard';


const SkillsList = ({skills}) => {
    return (
            <div className = 'tc f3'>
               <h2>Skills</h2>
               {
               skills.map((skill,i) => {
               	return (
                    <SkillsCard 
                    key={skills[i].id}
                    id={skills[i].id}
                    appname={skills[i].appname}
                     appDesc={skills[i].appDesc}
                    />
                    );
                })
               }
            </div>
          );
  }

export default SkillsList;
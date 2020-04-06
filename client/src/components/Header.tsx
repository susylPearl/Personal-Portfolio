import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import resumeDataType from '../interfaces/dataType';

export const Header = (props: resumeDataType) => {

   let resumeData = props.data ? {
      name: props.data.name,
      occupation: props.data.occupation,
      description: props.data.description,
      city: props.data.address.city,
      networks: props.data.social.map((network) => {
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>;
      })
   } : null;

   return (
      resumeData ?
         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li><Link to={'/'} activeStyle={{color: 'red'}} exact>About</Link></li>
                  <li><Link to={'/resume'} activeStyle={{color: 'red'}}>Resume</Link></li>
                  <li><Link to={'/works'} activeStyle={{color: 'red'}}>Works</Link></li>
                  <li><Link to={'/contact'} activeStyle={{color: 'red'}}>Contact</Link></li>
               </ul>
            </nav>

         </header> : <div></div>
   );
}
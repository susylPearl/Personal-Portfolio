import React from 'react';
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
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  {/* <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
                  <h3>I'm a {resumeData.city} based <span>{resumeData.occupation}</span>. {resumeData.description}.</h3>
                  <hr />
                  <ul className="social">
                     {resumeData.networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header> : <div></div>
   );
}
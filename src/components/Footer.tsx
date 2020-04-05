import React from 'react';
import resumeDataType from '../interfaces/dataType';

export const Footer = (props: resumeDataType) => {
    let resumeData = props.data ? {
        networks: props.data.social.map((network) => {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>;
        })
    } : null;

    return(
       resumeData ?
        <footer>
        <div className="row">
           <div className="twelve columns">
              <ul className="social-links">
                 {resumeData.networks}
              </ul>
   
              <ul className="copyright">
                 <li>&copy; Copyright 2020 Chiranjhivi Ghimire</li>
              </ul>
   
           </div>
        </div>
     </footer> : <div></div> 
    );
}
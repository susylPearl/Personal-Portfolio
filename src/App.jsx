import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/fetchData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import './App.css';

const  App = () => {

  let resumeData = useSelector(state => state.resumeDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="item-main-container">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      {/* <Resume data={resumeData.resume}/>
      <Portfolio data={resumeData.portfolio}/>
      <Testimonials data={resumeData.testimonials}/>
      <Contact data={resumeData.main}/> */}
      <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;

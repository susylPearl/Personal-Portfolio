import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/fetchData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import './App.css';
import $ from 'jquery';

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
      <Header data={resumeData.main} />
      <Switch>
        <Route exact path='/about' render={ () => <About data={resumeData.main}/> }/>
        <Route exact path='/resume' render={ () => <Resume data={resumeData.resume}/> }/>
        <Route exact path='/works' render={ () => <Portfolio data={resumeData.portfolio}/> }/>
        <Route exact path='/contact' render={ () => <Contact data={resumeData.main}/> }/>
      </Switch>
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;

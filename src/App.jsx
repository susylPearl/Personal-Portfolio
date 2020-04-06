import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/portfolioAsynAction';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import './css/main.css';

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
        <Route exact path='/' render={ () => <About data={resumeData.main}/> }/>
        <Route path='/resume' render={ () => <Resume data={resumeData.resume}/> }/>
        <Route path='/works' render={ () => <Portfolio data={resumeData.portfolio}/> }/>
        <Route path='/contact' render={ () => <Contact data={resumeData.main}/> }/>
      </Switch>
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;

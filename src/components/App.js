import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';

export default() => {
  return (<div className="app">
    <HashRouter basename="/">
      <div>
        <Header/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </HashRouter>
    <Footer/>
  </div>);
};

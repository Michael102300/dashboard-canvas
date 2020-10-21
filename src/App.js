import React, {useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FirstChart from './components/Charts/FirstChart';
import Dynamic from './components/Dynamic/Dynamic';
import FourthChart from './components/Charts/FouthChart';

export default function App() {
  return (
    
    <Router>
        <Switch>
          <Route path="/about" component={FirstChart}/>
          <Route path="/users">
            <Dynamic showComponent={true}/>
          </Route>
          <Route path="/" component={FourthChart}/> 
        </Switch>
    </Router>
  );
}
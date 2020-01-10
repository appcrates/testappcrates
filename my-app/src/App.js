import React from 'react';
import './App.css';
import Header from './components/myHeader';
import Home from './components/Home';
import OurValues from './components/OurValues';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" exact component= {Home} />
      <Route path="/OurValues" component= {OurValues} />
      </Switch>
      </div>
    </BrowserRouter> 


  );
}

export default App;

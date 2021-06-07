import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Postupload from './Postupload'
import Screenpage from './Screenpage';
// import axios from "axios";

const App = () => {
  
  return ( 
    <>
      <Switch>
        <Route exact path="/" component={Screenpage} />
        <Route exact path="/postupload" component={Postupload} />
        <Route exact component={Error} />
      </Switch>    
    </>
  );
};

export default App;

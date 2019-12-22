import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Headerbar from './components/Headerbar'
import Searchbar from './components/Searchbar'
import HomeResults from './components/HomeResultsCont';
import MapSearch from './components/MapSearch';
import {Switch, Route} from 'react-router-dom';
import IndHome from './components/IndHomeImages';
function App() {
  // const RouteContainer = motion.div({
  //   enter: { opacity: 1, delay: 300, beforeChildren: true },
  //   exit: { opacity: 0 }
  // });
  return (
    <div>
    <Headerbar />
    <Searchbar />
    <div className="Page_Cont">
    <MapSearch />
      <Switch>
        <Route exact path="/">
          <HomeResults />
        </Route>
        <Route>
          <IndHome exact path="/Home" />
        </Route> 
    </Switch>
    </div>
    </div>
  );
}

export default App;

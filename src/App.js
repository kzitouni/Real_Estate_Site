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
  return (
    <div>
    <Headerbar />
    <Searchbar />
    <div className="Page_Cont">
      <Switch>
        <Route exact path="/">
          <HomeResults />
        </Route>
        <Route>
          <IndHome exact path="/Home" />
        </Route>      
    </Switch>
    <MapSearch />
    </div>
    </div>
  );
}

export default App;

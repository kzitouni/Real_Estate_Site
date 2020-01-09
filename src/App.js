import React from "react";
import "./App.scss";
import Headerbar from "./components/Headerbar";
import Searchbar from "./components/Searchbar";
import HomeResults from "./components/HomeGrid/HomeResultsCont";
import MapSearch from "./components/Map/MapSearch";
import { Switch, Route } from "react-router-dom";
import IndHome from "./components/IndHome/IndHome";
import Header from "./components/InfoPage/Header";
import Section1 from "./components/InfoPage/Section1";
import Section2 from "./components/InfoPage/Section2";
import Section3 from "./components/InfoPage/Section3";
import Numbers from "./components/InfoPage/Numbers";
import { Images } from "./components/InfoPage/Text";
function App() {
  return (
    <div>
      <Headerbar />
      <Switch>
        <Route exact path="/">
          <Searchbar /> 
          <div className="Page_Cont">
            <MapSearch />
            <HomeResults />
          </div>
        </Route>
        <Route exact path="/Home">
          <Searchbar />
          <div className="Page_Cont">
            <MapSearch />
            <IndHome />
          </div>
        </Route>
        <Route exact path="/Sell" >
          <Header menu={Images.Sell} />
          <Section1 menu={Images.Sell} />
          <Section2 menu={Images.Sell} />
          <Section3 menu={Images.Sell} />
          <Numbers menu={Images.Sell} />
        </Route>
        <Route exact path="/Buy">
          <Header menu={Images.Buy} />
          <Section1 menu={Images.Buy} />
          <Section2 menu={Images.Buy} />
          <Section3 menu={Images.Buy} />
          <Numbers menu={Images.Buy} />
        </Route>
        <Route exact path="/Info">
          <Header menu={Images.Info} />
          <Section1 menu={Images.Info} />
          <Section2 menu={Images.Info} />
          <Section3 menu={Images.Info} />
          <Numbers menu={Images.Info} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

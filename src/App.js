import React from 'react';
import 'jquery/dist/jquery';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </Switch>
  );
}

export default App;

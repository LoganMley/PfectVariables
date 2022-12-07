import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import PricingScreen from "./screens/PricingScreen";
import LogInScreen from "./screens/LogInScreen";
import LayoutRoute from "./LayoutRoute";


function App() {
  return(
      <BrowserRouter>
          <Switch>
              <LayoutRoute path="/" exact={true} component={HomeScreen} />
              <LayoutRoute path="/about" exact={true} component={AboutScreen} />
              <LayoutRoute path="/pricing" exact={true} component={PricingScreen} />
              <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
              <LayoutRoute path="/login" exact={true} component={LogInScreen} />
          </Switch>
      </BrowserRouter>
  )

}

export default App;

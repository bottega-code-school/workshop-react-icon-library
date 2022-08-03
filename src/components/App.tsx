import * as React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Events from "./Events";

const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="contact" path="/contact" component={Contact} />,
  <Route exact key="about" path="/about" component={AboutUs} />,
  <Route exact key="events" path="/events" component={Events} />,
];

const App = () => {
  return <Switch>{routes}</Switch>;
};

export default App;

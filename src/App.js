import React from "react";
import GlobalStyle from "./globalStyles";
import { Navbar, Home, Footer } from "./Containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

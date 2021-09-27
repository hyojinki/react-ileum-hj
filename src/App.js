import React from "react";
import GlobalStyle from "./globalStyles";
import { Navbar, Home, Footer, New, Detail, MyList } from "./Containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={New} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/mypage" exact component={MyList} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

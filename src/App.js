import React from "react";
import { Navbar, Footer } from "./components";
import HomePage from "./pages/HomePage/HomePage";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import GlobalStyle from "./globalStyles";
import Scroll from "./components/Scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Scroll />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

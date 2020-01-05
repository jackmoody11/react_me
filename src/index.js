import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import GitHub from "./github";
import Blog from "./blog";
import Nav from "./components/Nav";

const routing = (
  <BrowserRouter>
    <Nav></Nav>
    <Route exact path="/" component={App} />
    <Route path="/github" component={GitHub} />
    <Route path="/blog" component={Blog} />
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

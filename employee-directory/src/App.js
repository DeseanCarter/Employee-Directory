import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import NavTabs from "./components/NavTabs";
import Search from "./components/pages/Search";
//import About from "./components/pages/About";
//import Blog from "./components/pages/Blog";
//import Contact from "./components/pages/Card";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}

export default App;

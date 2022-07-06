import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Notes from "./wrappers/Notes";
import UserDetails from "./wrappers/UserDetails";
import Login from "./wrappers/Login";
import UserList from "./wrappers/UserList";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/notes" component={Notes} />
        <Route path="/user-details" component={UserDetails} />
        <Route path="/user-list" component={UserList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

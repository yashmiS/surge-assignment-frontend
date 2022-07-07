import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Notes from "./wrappers/Notes";
import UserDetails from "./wrappers/UserDetails";
import Login from "./wrappers/Login";
import UserList from "./wrappers/UserList";
import { useHistory } from "react-router-dom";
import NoteDetails from "./wrappers/NoteDetails";

function App() {
  const history = useHistory();

  // useEffect(() => {
  //   try {
  //     const currentUser = localStorage.getItem("@user");
  //     if (!currentUser) history.push("login");
  //   } catch (error) {
  //     history.push("login");
  //   }
  // }, [history]);

  // const handleLogout = () => {
  //   localStorage.removeItem("@user");
  //   localStorage.removeItem("@rememberMe");
  //   history.push("login");
  // };
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/notes" component={Notes} />
        <Route path="/user-details" component={UserDetails} />
        <Route path="/user-list" component={UserList} />
        <Route path="/login" component={Login} />
        <Route path="/note-details" component={NoteDetails} />
      </Switch>
      {/* <div onClick={handleLogout} style={{ cursor: "pointer" }}>
        <span style={{ display: "inline-block", width: 30 }}></span>Logout
      </div> */}
    </Router>
  );
}

export default App;

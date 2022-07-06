import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./wrappers/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetails from "./wrappers/UserDetails";
import Notes from "./wrappers/Notes";
import UserList from "./wrappers/UserList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/app"}>
          <App />
        </Route>
        <Route exact path={"/notes"}>
          <Notes />
        </Route>
        <Route exact path={"/user-details"}>
          <UserDetails />
        </Route>
        <Route exact path={"/user-list"}>
          <UserList />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

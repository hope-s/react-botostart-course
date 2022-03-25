import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import './Styles/index.css';

import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Loading from "./Components/Reusable/Loading";

import Home from "./Components/Layout/Home";
import LandingPage from "./Components/Layout/LandingPage";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <Switch>
      <Route path="/" exact component={LandingPage}/>
      <ProtectedRoute path="/home" exact component={Home}/>
    </Switch>
  );
}

export default App;

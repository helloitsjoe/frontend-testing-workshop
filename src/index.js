import React from "react";
import { render } from "react-dom";
import { Home } from "./sharedComponents/home/home";
import { Exercises } from "./sharedComponents/exercises/exercises";
import { StaticApp } from "./challengeComponents/staticApp/staticApp";
import AsyncApp from "./challengeComponents/asyncApp/asyncApp";
import { usersProps } from "./challengeComponents/utilities/mockUserData";
import { fetchUsers } from "./challengeComponents/utilities/fetchUsers";
import { Router } from "@reach/router";
import { Header } from "./sharedComponents/header/header";

render(
  <React.Fragment>
    <Header />
    <main>
      <Router primary={false}>
        <Home path="/" />
        <StaticApp path="/staticApp" data={usersProps} />
        <AsyncApp path="/asyncApp" fetchUsers={fetchUsers} />
        <Exercises path="/exercises" />
      </Router>
    </main>
  </React.Fragment>,
  document.getElementById("root")
);

import React, { Fragment } from "react";
import { Router } from "@reach/router";

import PageContainer from "../components/PageContainer";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";

import "../components/styles/landingPage.css";
import Dashboard from "./dashboard";
import Search from "./search";
import SingleRecipe from "./singleRecipe";
import SignIn from "./signIn";
import SignUp from "./signUp";
import UserRecipes from "./userRecipes";

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Header />
        <Router primary={false} component={Fragment}>
          <LandingPage path="/graphQL-recipeFinderClient" />
          <Dashboard path="/dashboard" />
          <Search path="/search/*" />
          <SingleRecipe path="/singleRecipe/*" />
          <SignIn path="/signIn" />
          <SignUp path="/signUp" />
          <UserRecipes path="/myRecipes" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}

/*********  TODO
         <Route exact path='/signUp' component={ SignUpForm } /> 
         <Route exact path='/searchedRecipes' component={ Content } />
         <Route exact path='/myRecipes' component={ UserSavedRecipes } />
         <Route path='/recipe/:id' component={ SingleRecipe } />
*/

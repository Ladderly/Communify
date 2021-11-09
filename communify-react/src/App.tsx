import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer/AppContainer.page";
import ScrollToTop from "./pages/AppContainer/ScrollToTop";
import AuthPage from "./pages/Auth/Auth.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage />
          </Route>
          <Route
            path={[
              "/home",
              "/profile/:userID",
              "/question/:questionID",
              "/questionlist",
            ]}
            exact
          >
            <AppContainerPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

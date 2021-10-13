import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Login.page";
import SignUpPage from "./SignUp.page";

interface Props {}

const Auth: FC<Props> = (props) => {
  return (
    <>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
      </Switch>
    </>
  );
};

Auth.defaultProps = {};

export default memo(Auth);

import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HomePage from "./Home.page";
import ProfilePage from "./Profile.page";
import QuestionPage from "./Question.page";
import QuestionListPage from "./QuestionList.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/question/:questionID" exact>
          <QuestionPage />
        </Route>
        <Route path="/questionlist" exact>
          <QuestionListPage />
        </Route>
      </Switch>
    </>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);

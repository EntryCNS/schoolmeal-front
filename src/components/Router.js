import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login/loginMain";
import MainPage from "./mainPage/MainPage";
import { connect } from "react-redux";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <MainPage />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(AppRouter);

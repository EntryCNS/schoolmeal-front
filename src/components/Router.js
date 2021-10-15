import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login/loginMain";
import MainPage from "./mainPage/MainPage";
import { connect } from "react-redux";
import RequestMain from "./routes/requestPage/RequestMain";
const AppRouter = ({ isLoggedIn }) => {
  // useEffect(() => {
  //   localStorage.getItem("jwtRefreshToken", resData.body.jwtRefreshToken);
  //   localStorage.getItem("jwtAccessToken", resData.body.jwtAccessToken);
  // }, []);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/request">
              <RequestMain />
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
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps, null)(AppRouter);

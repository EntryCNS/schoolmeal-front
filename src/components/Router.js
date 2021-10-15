import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login/loginMain";
import MainPage from "./mainPage/MainPage";
import { connect } from "react-redux";
import RequestMain from "./routes/requestPage/RequestMain";
import { LOGGED } from "../reducer/reducer";
const AppRouter = ({ isLoggedIn, login }) => {
  useEffect(() => {
    if (localStorage.getItem("jwtRefreshToken")&&localStorage.getItem("jwtAccessToken")) {
      login();
    } else {
      return;
    }
  }, []);
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
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: LOGGED }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);

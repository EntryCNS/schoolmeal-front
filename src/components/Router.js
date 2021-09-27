import React,{useState} from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./routes/Login/loginMain"
import MainPage from "./mainPage/MainPage"
const AppRouter = ({isLoggedIn})=> {
     return(
         <Router>
             <Switch>
                 {isLoggedIn ? (
                 <>
                 <Route exact path="/">
                     <MainPage/>
                 </Route> 
                 </>
                 ):(
                  <Route exact path="/">
                      <Login />
                  </Route>
                  )}
             </Switch>
         </Router>
     )
 }

 export default AppRouter
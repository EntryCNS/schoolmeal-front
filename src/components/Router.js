import React,{useState} from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";
import Login from "./routes/Login/loginMain"
import Main from "./routes/Main"
const AppRouter = ({isLoggedIn})=> {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
     return(
         <Router>
             <Switch>
                 {isLoggedIn ? (
                 <>
                 <Route exact path="/">
                     <Main/>
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
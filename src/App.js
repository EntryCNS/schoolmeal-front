import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import loginMain from "./components/Login/loginMain";
import loginForm from "./components/Login/loginForm";
import registerMain from "./components/register/registerMain";
import registerForm from "./components/register/registerForm";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Route exact path="/loginMain" component={loginMain} />
            <Route exact path="/loginForm" component={loginForm} />
            <Route exact path="/registerMain" component={registerMain} />
            <Route exact path="/registerForm" component={registerForm} />
            <Route path="/MainPage" component={MainPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import loginMain from './components/Login/loginMain';
import loginForm from './components/Login/loginForm';
import { hashString } from './utils/security'
// import LoginPage from './page/Login/LoginPage';
// import { Diff } from 'jest/node_modules/jest-diff/build/cleanupSemantic';

function App() {
  console.log(hashString("Hello"))

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <Route exact path="/loginMain" component={loginMain}></Route>
          <Route exact path="/loginForm" component={loginForm}></Route>
        </div>     
       </header>
    </div>
    </Router>
  )
}

export default App;

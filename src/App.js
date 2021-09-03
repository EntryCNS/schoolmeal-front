
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import loginMain from './components/loginMain';
// import { Diff } from 'jest/node_modules/jest-diff/build/cleanupSemantic';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <Route exact path="/loginMain" component={loginMain}></Route>
        </div>     
       </header>
    </div>
    </Router>
  )
}

export default App;

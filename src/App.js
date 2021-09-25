
// import "./styles/App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import loginMain from './components/Login/loginMain';
// import loginForm from './components/Login/loginForm';
import AppRouter from './components/Router';
import React,{useState} from 'react';
// import registerMain from './components/register/registerMain'
// import registerForm from './components/register/registerForm'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    </>

    // <Router>
    // <div className="App">
    //   <header className="App-header">
    //     <div>
    //       <Route exact path="/loginMain" component={loginMain}/>
    //       <Route exact path="/loginForm" component={loginForm}/>
    //       {/* <Route exact path="/registerMain" component={registerMain}/> */}
    //       {/* <Route exact path="/registerForm" component={registerForm}/> */}
    //     </div>     
    //    </header>
    // </div>
    // </Router>
  )
}

export default App;
